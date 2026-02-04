import routes from 'src/pages'
import Server from 'voldemortas-server'
import {isProd, getConfigVars} from 'voldemortas-server/utils'
import renderReact from 'src/build/renderReact.ts'
import {defaultHtml, devHtml, outDir} from 'build/config.ts'

const {KALBYNAS_PORT, HOSTNAME} = getConfigVars()

if (isProd()) {
  Bun.spawn([import.meta.dir + '/../build-status.ts'], {stdout: 'inherit'})
}
const server = new Server({
  port: KALBYNAS_PORT,
  hostname: HOSTNAME,
  routes,
  staticPaths: [/^\/static\//, /^\/front\//],
  defaultHtml,
  developmentHtml: devHtml,
  outDir,
  renderReact,
}).getServer()

console.log(`Listening on ${server.url}`)
