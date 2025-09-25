import { $ } from 'bun'

export default async function buildStatus() {
  await $`mkdir out/status`
  await $`bun run ./lines-coverage.ts >> out/status/lines.json`
  await $`bun run ./func-coverage.ts >> out/status/functions.json`
  await $`bun run ./files-coverage.ts >> out/status/files.json`
  await $`echo {\"build-date\": \"$(date '+%Y-%m-%d %H:%M:%S')\"} >> out/status/build.json`
}
