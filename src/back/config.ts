export const ROOT = `${import.meta.dir}`.replaceAll(/\/\w+$/g, '')
export const FRONT_ROOT = `${ROOT}/front`
export const PROD_HOST = 'kalbynas.lt'
export const ALTERNATES = ['lt', 'en'] as const
export type ALTERNATES_TYPE = (typeof ALTERNATES)[number]
export const DEFAULT_ALTERNATE: ALTERNATES_TYPE = 'lt'
export const FILES_FOR_BUILD = {
  DEFAULT_HTML: `${ROOT}/back/pages/common/default.html`,
  DEVELOPMENT_HTML: `${ROOT}/back/pages/common/development.html`,
}
