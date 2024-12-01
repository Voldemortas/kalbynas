import {$} from 'bun'

const MIN_BOUND_PERCENTAGE = 50
const MAX_BOUND_PERCENTAGE = 100
const MIN_H_COLOUR = 0
const MAX_H_COLOUR = 150

export function generateHsl(colourPercentage: number) {
  let normalisedPercentage = colourPercentage
  if (colourPercentage < MIN_BOUND_PERCENTAGE) {
    normalisedPercentage = MIN_BOUND_PERCENTAGE
  }
  if (colourPercentage > MAX_BOUND_PERCENTAGE) {
    normalisedPercentage = MAX_H_COLOUR
  }
  normalisedPercentage -= MIN_BOUND_PERCENTAGE

  const step =
    (MAX_H_COLOUR - MIN_H_COLOUR) /
    (MAX_BOUND_PERCENTAGE - MIN_BOUND_PERCENTAGE)

  return Math.round(step * normalisedPercentage)
}

const shellOutput = await $`bun test --coverage`.quiet().nothrow()

const stdErr = shellOutput.stderr.toString()

const [, funcs, lines] = stdErr.match(
  /All files\s*\|\s*([\d\.]+)\s*\|\s*([\d\.]+)\s*\|/
) ?? ['0', '0', '0']

export {funcs, lines}
