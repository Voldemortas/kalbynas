import {describe, expect, it} from 'bun:test'
import format, {FORMATS} from 'back/api/formatters'
import {formatError} from 'back/api/errors.ts'

const CONTENT_HEADERS: Record<string, string> = {
  json: 'application/json',
  xml: 'application/xml',
}
const DATA = {
  ['žūti-žūna-žuvo']: {
    futInd: {
      sg1: 'žūsiu',
      sg2: 'žūsi',
      sg3: 'žus',
      pl1: 'žūsime',
      pl2: 'žūsite',
      pl3: 'žus',
    },
    pastInd: {
      sg1: 'žuvau',
      sg2: 'žuvai',
      sg3: 'žuvo',
      pl1: 'žuvome',
      pl2: 'žuvote',
      pl3: 'žuvo',
    },
  },
  ['valgyti-valgo-valgė']: {
    futInd: {
      sg1: 'valgysiu',
      sg2: 'valgysi',
      sg3: 'valgys',
      pl1: 'valgysime',
      pl2: 'valgysite',
      pl3: 'valgys',
    },
    pastInd: {
      sg1: 'valgiau',
      sg2: 'valgei',
      sg3: 'valgė',
      pl1: 'valgėme',
      pl2: 'valgėte',
      pl3: 'valgė',
    },
  },
}

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
