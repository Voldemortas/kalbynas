import {wrap} from 'voldemortas-server'
import {
  defaultHtml,
  devHtml,
  entryPoint,
  frontDir,
  outDir,
  rootDir,
  srcDir,
  staticDir,
  tempDir,
} from 'build/config.ts'
import routes from 'src/pages.ts'

await wrap({
  rootDir,
  outDir,
  srcDir,
  entryPoint,
  staticDir,
  frontDir,
  tempDir,
  defaultHtml,
  developmentHtml: devHtml,
  routes,
  globalScssOptions: {
    scssFilePath: `${srcDir}/static/global.scss`,
    outFileName: `${outDir}/static/global.css`,
    loadPaths: [`${srcDir}/static`],
  },
})
