import {describe, expect, it} from 'bun:test'
import format, {FORMATS} from 'back/api/formatters'
import {jsonHeaders} from 'voldemortas-server/utils'
import {formatError} from 'back/api/errors.ts'

const formatterData: Record<string, [Object, string, string][]> = {
  json: [
    [
      {
        ['žūti-žūna-žuvo']: {
          futInd: {
            sg1: 'žūsiu',
            sg2: 'žūsi',
            sg3: 'žus',
            pl1: 'žūsime',
            pl2: 'žūsite',
            pl3: 'žus',
          },
        },
      },
      '{"žūti-žūna-žuvo":{"futInd":{"sg1":"žūsiu","sg2":"žūsi","sg3":"žus","pl1":"žūsime","pl2":"žūsite","pl3":"žus"}}}',
      jsonHeaders.headers['content-type'],
    ],
  ],
}

describe('api/formatters', () => {
  describe.each(Object.keys(FORMATS))('format using %s', (formatter) => {
    it.each(formatterData[formatter])(
      'looks for %o',
      async (obj, str, headerContentType, done) => {
        const response = format(formatter, obj)
        const text = await response.text()
        const contentType = response.headers.get('content-type')!
        expect(response.status).toBe(200)
        expect(text).toStrictEqual(str)
        expect(contentType).toStrictEqual(headerContentType)
        done()
      }
    )
  })
  it('throws error for unsupported format', async (done) => {
    expect(() => format('csv', formatterData['json'][0])).toThrowError(
      formatError
    )
    done()
  })
})
