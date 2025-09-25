import { generateHsl } from './coverage.ts'
import { readdir } from 'node:fs/promises'

const SOURCE_ROOT = 'src'
const TEST_ROOT = 'test'

const jsFiles = (await readdir(SOURCE_ROOT, { recursive: true }))
  .filter(
    (fileName) =>
      fileName.endsWith('.ts') ||
      fileName.endsWith('.tsx') ||
      fileName.endsWith('.js') ||
      fileName.endsWith('.jsx')
  )
  .filter((fileName) => !/\/translations\/\w+\.ts/.test(fileName))

const testFiles = (await readdir(TEST_ROOT, { recursive: true }))
  .filter(
    (fileName) =>
      fileName.endsWith('.test.ts') ||
      fileName.endsWith('.test.tsx') ||
      fileName.endsWith('.test.js') ||
      fileName.endsWith('.test.jsx')
  )
  .map((fileName) => fileName.replace('.test.', '.'))

const existingTests = jsFiles.filter((file) => testFiles.includes(file))

const coveredPercentage = (existingTests.length / jsFiles.length) * 100

console.log(
  JSON.stringify({
    schemaVersion: 1,
    label: 'Files coverage',
    message: `${coveredPercentage.toFixed(2).replace(/(\.0+$)|(0+$)/, '')}%`,
    color: `hsl(${generateHsl(+coveredPercentage)}, 100%, 40%)`,
  })
)
