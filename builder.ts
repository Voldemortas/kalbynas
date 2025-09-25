import { $ } from 'bun'
import buildFront from './build-front.ts'
import type { PageType, ReactType } from './src/pages.ts'
import pages from './src/pages.ts'
import buildBack from './build-back.ts'
import buildGlobalScss from './build-global.scss.ts'

export default async function build() {
  log('Starting the build')
  await $`rm -rf out`
  await $`rm -rf temp`
  await $`mkdir out`
  await $`mkdir out/status`
  await $`echo \[$(date '+%Y-%m-%d %H:%M:%S.%3N')\] build >> out/status/info.txt`
  log('Copying static files')
  await $`cp -r src/static/ out/static/`
  await $`cp src/back/pages/common/default.html out/`
  await $`cp src/back/pages/common/development.html out/`
  log('Building css')
  await buildGlobalScss()
  log('Building frontend')
  const frontPaths = (pages as PageType<ReactType>[])
    .filter((p) => p.resolve.type === 'react')
    .map((p) => p.resolve.path)
  await buildFront(frontPaths)
  log('Building backend')
  await buildBack()
  log('Build completed')
}

export function log(...arg: any) {
  console.log(`[${new Date().toISOString().split('T')[1].replace('Z', '')}]`, ...arg)
}

export function format(...arg: any) {
  return
}