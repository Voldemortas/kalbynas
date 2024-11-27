import isProd from './src/back/pages/common/isProd.ts'
import {FILES_FOR_BUILD} from 'back/config.ts'

export default async function buildBack() {
  const buildOutput = await Bun.build({
    entrypoints: ['src/back/server.ts', ...Object.values(FILES_FOR_BUILD)],
    outdir: 'out/back',
    target: 'bun',
    minify: isProd(),
  })
  if (!buildOutput.success) {
    console.error(buildOutput.logs)
  }
}
