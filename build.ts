import {$} from 'bun'
import buildFront from './build-front'
import type {PageType, ReactType} from './src/pages'
import pages from './src/pages'
import buildBack from './build-back'
import isProd from './src/back/pages/common/isProd.ts'

export default async function build() {
  const hash = crypto.randomUUID().split('-')[0]
  await $`rm -rf out`
  await $`rm -rf temp`
  await $`mkdir out`
  await $`cp -r src/static/ out/static/`
  const frontPaths = (pages as PageType<ReactType>[])
    .filter((p) => p.resolve.type === 'react')
    .map((p) => p.resolve.path)
  await buildFront(frontPaths)
  await buildBack()
  await Bun.write(
    'out/.env',
    `${isProd() ? `HASH=${hash}\n` : ''}PRODUCTION=${isProd()}`
  )
}

await build()
