import {generateHsl, lines} from './coverage.ts'

console.log(
  JSON.stringify({
    schemaVersion: 1,
    label: 'Lines coverage',
    message: `${lines}%`,
    color: `hsl(${generateHsl(+lines)}, 100%, 40%)`,
  })
)
