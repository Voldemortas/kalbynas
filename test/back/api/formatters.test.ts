import {describe, expect, it} from 'bun:test'
import format, {FORMATS} from 'back/api/formatters'
import {formatError} from 'back/api/errors.ts'
import {verb} from 'back/api'

const CONTENT_HEADERS: Record<string, string> = {
  json: 'application/json',
  xml: 'application/xml',
}
const DATA = verb('žūti-žūna-žuvo,valgyti-valgo-valgė', 'all')

describe('api/formatters', () => {
  it.each(Object.keys(FORMATS))('formats with %s', async (key, done) => {
    const expectedText = await readFormattedFile(key)
    const response = format(key, DATA)
    const text = await response.text()
    const contentType = response.headers.get('content-type')!
    expect(response.status).toBe(200)
    expect(contentType).toStrictEqual(CONTENT_HEADERS[key])
    expect(text).toEqualIgnoringWhitespace(expectedText)
    done()
  })
  it('throws error for unsupported format', async (done) => {
    expect(() => format('csv', DATA)).toThrowError(formatError)
    done()
  })
})

async function readFormattedFile(key: string) {
  const file = Bun.file(import.meta.dir + '/formattedFiles/formatted.' + key)
  return await file.text()
}
