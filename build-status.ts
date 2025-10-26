#!/usr/bin/env bun
import {$} from 'bun'

function log(...arg: any) {
  console.log(
    `[${new Date().toISOString().split('T')[1].replace('Z', '')}]`,
    ...arg
  )
}

async function buildStatus() {
  log('Reporting build status in the background')
  await $`bun run ./lines-coverage.ts >> out/status/lines.json`
  await $`bun run ./func-coverage.ts >> out/status/functions.json`
  await $`bun run ./files-coverage.ts >> out/status/files.json`
  await $`echo \[$(date '+%Y-%m-%d %H:%M:%S.%3N')\] serve >> out/status/info.txt`
  log('Reporting completed')
}

await buildStatus()
