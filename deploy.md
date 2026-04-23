# Deploy — Nail Designer 2026

## Variáveis que você precisa definir antes de qualquer passo

| Variável | Exemplo |
|---|---|
| `SEU_DOMINIO.com` | `seudominio.com` |
| `/SEU_SLUG` | `/nail2026` (ou `/` para a raiz) |
| `VITE_META_PIXEL_ID` | `1234567890` |
| `VITE_CHECKOUT_URL` | `https://pay.hotmart.com/XXXXX` |

---

## 1. Desenvolvimento local

```bash
cd nail-designer-app

# Instalar dependências
npm install

# Copiar e preencher variáveis de ambiente
cp .env.example .env
# Edite .env com seu editor preferido

# Rodar (frontend porta 3000 + API porta 3001)
npm run dev
```

Acesse: http://localhost:3000

---

## 2. Build de produção

```bash
npm run build
# Saída em: nail-designer-app/dist/
```

---

## 3. Enviar para o VPS

```bash
# Substitua user@IP pelo seu usuário e IP do VPS
rsync -avz --delete dist/ user@IP:/var/www/nail-designer/dist/
```

Ou com `scp`:
```bash
scp -r dist/ user@IP:/var/www/nail-designer/dist/
```

---

## 4. Configurar o servidor Node (analytics)

No VPS, instale o Node.js (>=18) e configure um processo persistente:

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Criar pasta da API no servidor
mkdir -p /opt/nail-designer-api
# Copie api/server.js para lá
scp api/server.js user@IP:/opt/nail-designer-api/

# No VPS:
cd /opt/nail-designer-api
# Criar package.json mínimo
echo '{"type":"module"}' > package.json

# Subir com PM2
API_PORT=3001 \
ANALYTICS_LOG_PATH=/var/log/nail-analytics.jsonl \
ALLOWED_ORIGIN=https://SEU_DOMINIO.com \
pm2 start server.js --name nail-api

pm2 save
pm2 startup   # siga as instruções que ele imprimir
```

---

## 5. Nginx

```bash
# Copiar a config
sudo cp nginx/site.conf /etc/nginx/sites-available/nail-designer

# Editar substituindo SEU_DOMINIO.com e /SEU_SLUG
sudo nano /etc/nginx/sites-available/nail-designer

# Ativar
sudo ln -sf /etc/nginx/sites-available/nail-designer /etc/nginx/sites-enabled/

# Testar e recarregar
sudo nginx -t && sudo systemctl reload nginx
```

---

## 6. TLS com Let's Encrypt (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d SEU_DOMINIO.com -d www.SEU_DOMINIO.com
```

O certbot edita o nginx.conf automaticamente e agenda a renovação.

---

## 7. Cloudflare — configurações recomendadas

1. **DNS**: aponte o registro `A` (ou `AAAA`) do subdomínio/raiz para o IP do VPS, com o proxy laranja ligado.
2. **SSL/TLS mode**: `Full (strict)` — o Nginx tem cert real via Let's Encrypt.
3. **Rules → Page Rules** (ou Transform Rules): desative o cache de `/api/*` para não armazenar payloads de tracking.
4. **Speed → Minification**: pode deixar ativo; os assets React já estão minificados pelo Vite.

---

## 8. Meta Pixel — checklist

- Defina `VITE_META_PIXEL_ID` no `.env` antes do build.
- O pixel dispara `PageView` automaticamente ao carregar.
- `ViewContent` é disparado quando a página fica visível no viewport.
- `InitiateCheckout` dispara em cada clique de CTA.
- Para `Purchase`, chame `trackPurchase(78.90)` no seu componente de confirmação (ou via webhook).

---

## 9. Verificar analytics

```bash
# No VPS — ver eventos em tempo real
tail -f /var/log/nail-analytics.jsonl | python3 -m json.tool

# Contar por evento
grep -o '"event":"[^"]*"' /var/log/nail-analytics.jsonl | sort | uniq -c | sort -rn
```

---

## Estrutura de pastas

```
nail-designer-app/
├── src/
│   ├── components/       # Hero, VideoSection, Bonuses, FAQ, Pricing…
│   ├── data/page.ts      # ← todo o conteúdo do JSON aqui (edite aqui)
│   ├── lib/
│   │   ├── pixel.ts      # Meta Pixel helpers
│   │   └── analytics.ts  # /api/track client
│   └── hooks/useTracking.ts
├── api/server.js         # Servidor Node puro (sem deps) para /api/track
├── nginx/site.conf       # Config Nginx pronta para copiar
└── deploy.md             # Este arquivo
```
