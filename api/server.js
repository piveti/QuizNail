import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = parseInt(process.env.API_PORT || '3001', 10)
const LOG_PATH = path.resolve(process.env.ANALYTICS_LOG_PATH || path.join(__dirname, '..', 'analytics.jsonl'))

function allowedOrigin(req) {
  const origin = req.headers.origin || ''
  // In production set ALLOWED_ORIGIN env; dev accepts all
  const allowed = process.env.ALLOWED_ORIGIN
  if (!allowed) return true
  return origin === allowed
}

function respond(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(JSON.stringify(body))
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    respond(res, 204, {})
    return
  }

  if (req.method === 'POST' && req.url === '/api/track') {
    let body = ''
    req.on('data', (chunk) => { body += chunk })
    req.on('end', () => {
      try {
        const payload = JSON.parse(body)

        // Sanitize: keep only known-safe keys
        const safe = {
          event: String(payload.event || '').slice(0, 64),
          slug: String(payload.slug || '').slice(0, 128),
          utm_source: payload.utm_source || null,
          utm_medium: payload.utm_medium || null,
          utm_campaign: payload.utm_campaign || null,
          utm_content: payload.utm_content || null,
          utm_term: payload.utm_term || null,
          fbclid: payload.fbclid || null,
          referrer: String(payload.referrer || '').slice(0, 256),
          url: String(payload.url || '').slice(0, 512),
          ts: Number(payload.ts) || Date.now(),
          ip: req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress,
          ua: (req.headers['user-agent'] || '').slice(0, 256),
        }

        fs.appendFile(LOG_PATH, JSON.stringify(safe) + '\n', (err) => {
          if (err) console.error('[track] write error', err.message)
        })

        respond(res, 200, { ok: true })
      } catch {
        respond(res, 400, { ok: false, error: 'invalid json' })
      }
    })
    return
  }

  respond(res, 404, { ok: false, error: 'not found' })
})

server.listen(PORT, () => {
  console.log(`[api] analytics server listening on :${PORT}`)
  console.log(`[api] logging to ${LOG_PATH}`)
})
