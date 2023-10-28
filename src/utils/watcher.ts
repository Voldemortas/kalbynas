import {exec} from 'child_process'
import {watch} from 'fs'
import argumentsParser from './argsParser'

const port = argumentsParser(Bun.argv, '--port') ?? 3001

console.log(`Started dev build in watch mode`)
exec('bun run build-dev', (error, stdout, stderr) => {})
exec('bun run serve-dev --port ' + port, (error, stdout, stderr) => {})
console.log(`Server should work on: http://localhost:${port}`)
const watcher = watch(
  import.meta.dir + '/..',
  {recursive: true},
  (event, filename) => {
    console.log(`Detected ${event} in ${filename}\nRecompiling`)
    exec('bun run build-dev', (error, stdout, stderr) => {})
    exec('bun run serve-dev --port ' + port, (error, stdout, stderr) => {})
  }
)

