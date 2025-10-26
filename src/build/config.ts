export const PROD_HOST = 'kalbynas.lt'
export const ALTERNATES = ['lt', 'en'] as const
export type ALTERNATES_TYPE = (typeof ALTERNATES)[number]
export const DEFAULT_ALTERNATE: ALTERNATES_TYPE = 'lt'

const metaDir = import.meta.dir ?? ''
//TODO find a way to organise this better
export const rootDir = metaDir + (metaDir.includes('/out') ? '/../' : '/../../')
export const outDir = rootDir + 'out'
export const tempDir = rootDir + 'temp'
export const srcDir = rootDir + 'src'
export const entryPoint = srcDir + '/build/server.ts'
export const staticDir = 'static'
export const frontDir = srcDir + '/front/'
export const defaultHtml = srcDir + '/build/default.html'
export const devHtml = srcDir + '/build/development.html'
