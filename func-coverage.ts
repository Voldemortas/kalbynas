import {funcs, generateHsl} from './coverage.ts'

console.log(
  JSON.stringify({
    schemaVersion: 1,
    label: 'Functions coverage',
    message: `${funcs}%`,
    color: `hsl(${generateHsl(+funcs)}, 100%, 40%)`,
  })
)
