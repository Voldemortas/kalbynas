import {describe, expect, test} from 'bun:test'
import robots from 'back/static/robots.ts'
import {textHeaders} from 'back/common/responseHeaders.ts'
import assertHeaders from 'test/back/assertHeaders.ts'

describe('robots.txt', () => {
  test('returns correct headers', () => {
    const response = robots(new Request('http://localhost:8080'), [])
    assertHeaders(response, textHeaders.headers)
  })
  test('returns correct body ', async () => {
    const responseText = await robots(
      new Request('http://en.kalbynas.lt'),
      []
    ).text()
    expect(responseText).toStrictEqual(`User-agent: * 
Crawl-delay: 2

SITEMAP: https://en.kalbynas.lt/sitemap.txt`)
  })
})
