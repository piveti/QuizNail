/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_META_PIXEL_ID: string
  readonly VITE_CHECKOUT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
