import {describe, expect, test} from 'bun:test'
import sitemap from 'back/static/sitemap.ts'
import assertHeaders from 'test/back/assertHeaders.ts'
import {textHeaders} from 'voldemortas-server/utils'

describe('sitemap.txt', () => {
  test('returns correct headers', () => {
    const response = sitemap(new Request('http://localhost:8080'), [])
    assertHeaders(response, textHeaders.headers)
  })
  test('returns correct body ', async () => {
    const responseText = await sitemap(
      new Request('http://en.kalbynas.lt'),
      []
    ).text()
    expect(responseText.split('\n')).toStrictEqual([
      'https://en.kalbynas.lt/',
      'https://en.kalbynas.lt/contact',
      'https://en.kalbynas.lt/dialectology',
      'https://en.kalbynas.lt/baltistics',
      'https://en.kalbynas.lt/articles',
      'https://en.kalbynas.lt/articles/prefixed-verbs-accentuation',
    ])
  })
})
