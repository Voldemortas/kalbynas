export const HOSTNAME = Bun.env.HOSTNAME ?? '0.0.0.0'
export const PORT = Bun.env.PORT ?? 3000
export const IS_SSL =
  Bun.env.SSL?.toLowerCase() === 'true' || Bun.env.SSL === '1'
export const SSL_SUFFIX = IS_SSL ? 's' : ''

export const PROJECT_BASE_URL = `http${SSL_SUFFIX}://${HOSTNAME}:${PORT}`
