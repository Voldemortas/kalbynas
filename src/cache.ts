import routes from 'src/pages'
import {getConfigVars} from 'voldemortas-server/utils'
import {$} from 'bun'
import {ALTERNATES, DEFAULT_ALTERNATE} from 'build/config.ts'
const {CACHE, HOSTNAME, KALBYNAS_PORT} = getConfigVars()

if (CACHE == 'true') {
  const t0 = performance.now()
  const pathsToVisit: string[] = []
  routes
    .filter(({type}) => type === 'react')
    .forEach(({url}) => {
      ALTERNATES.filter((alternate) => alternate !== 'api').forEach(
        (alternate) => {
          if (typeof url !== 'string') {
            return
          }
          pathsToVisit.push(
            `http://${alternate === DEFAULT_ALTERNATE ? '' : alternate + '.'}${HOSTNAME}:${KALBYNAS_PORT}${url}`
          )
        }
      )
    })

  await Promise.all(
    pathsToVisit.map(
      async (path) =>
        await $`bunx chromium --headless --dump-dom ${path}`.quiet().nothrow()
    )
  )
  const t1 = performance.now()
  console.log(`Visited ${pathsToVisit.length} links in ${t1 - t0}ms`)
} else {
  console.warn('CACHE is not set to true, nothing was done')
}
