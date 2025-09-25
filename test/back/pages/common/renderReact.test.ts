import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  mock,
  spyOn,
} from 'bun:test'
import assertHeaders from 'test/back/assertHeaders.ts'
import renderReact from 'back/pages/common/renderReact.ts'
import { htmlHeaders } from 'back/common/responseHeaders.ts'
import * as isProd from 'back/pages/common/isProd.ts'
import { ModuleMocker } from 'test/ModuleMocker'

const HASH = 'abc123'
const DEFAULT_PARAMS = { hello: 'world' }
const DEFAULT_REQUEST = new Request('https://kalbynas.lt/test')
const ENGLISH_REQUEST = new Request('https://en.kalbynas.lt/test')

const moduleMocker = new ModuleMocker()

describe('renderReact', () => {
  beforeEach(() => {
    spyOn(isProd, 'default').mockReturnValue(true)
  })
  afterEach(() => {
    mock.restore()
    moduleMocker.clear()
  })

  it('correctly renders default locale page', async () => {
    const pageMock = await mockGetPage()

    const response = await renderReact(DEFAULT_REQUEST, HASH)
    const responseText = await response.text()
    const expectedHtml = (
      await Bun.file(`${import.meta.dir}/default_lt.html`).text()
    ).replace(`hello: 'world'`, `"hello":"world"`)

    expect(pageMock).toHaveBeenCalledWith(DEFAULT_REQUEST, 'react')
    expect(responseText).toEqualIgnoringWhitespace(expectedHtml)
    assertHeaders(response, htmlHeaders.headers)
  })
  it('correctly renders english locale page', async () => {
    const pageMock = await mockGetPage()

    const response = await renderReact(ENGLISH_REQUEST, HASH)
    const responseText = await response.text()
    const expectedHtml = (
      await Bun.file(`${import.meta.dir}/default_en.html`).text()
    ).replace(`hello: 'world'`, `"hello":"world"`)

    expect(pageMock).toHaveBeenCalledWith(ENGLISH_REQUEST, 'react')
    expect(responseText).toEqualIgnoringWhitespace(expectedHtml)
    assertHeaders(response, htmlHeaders.headers)
  })
})

async function mockGetPage() {
  const getPage = mock().mockReturnValue({
    resolve: {
      path: 'test.ts',
      resolver: () => DEFAULT_PARAMS,
    },
  })

  await moduleMocker.mock('src/pages.ts', () => ({ getPage }))

  return getPage
}
