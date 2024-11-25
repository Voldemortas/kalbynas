import {describe, expect, test} from 'bun:test'
import getUrl from 'back/pages/common/getUrl.ts'

const INDEX_LT = new Request('http://kalbynas.lt')
const INDEX_EN = new Request('http://en.kalbynas.lt')
const BALTISTICS_LT = new Request(
  'http://lt.kalbynas.lt/baltistics?one=two&three=four'
)
const BALTISTICS_EN = new Request('https://en.kalbynas.lt/baltistics/')

describe('getUrl', () => {
  test('sub', () => {
    expect(getUrl(INDEX_LT).sub).toEqual('kalbynas')
    expect(getUrl(BALTISTICS_LT).sub).toEqual('lt')
    expect(getUrl(INDEX_EN).sub).toEqual('en')
    expect(getUrl(BALTISTICS_EN).sub).toEqual('en')
  })
  test('pathname', () => {
    expect(getUrl(INDEX_LT).pathname).toEqual('/')
    expect(getUrl(BALTISTICS_LT).pathname).toEqual('/baltistics')
    expect(getUrl(INDEX_EN).pathname).toEqual('/')
    expect(getUrl(BALTISTICS_EN).pathname).toEqual('/baltistics')
  })
  test('href', () => {
    expect(getUrl(INDEX_LT).href).toEqual('http://kalbynas.lt/')
    expect(getUrl(BALTISTICS_LT).href).toEqual(
      'http://lt.kalbynas.lt/baltistics?one=two&three=four'
    )
    expect(getUrl(INDEX_EN).href).toEqual('http://en.kalbynas.lt/')
    expect(getUrl(BALTISTICS_EN).href).toEqual(
      'https://en.kalbynas.lt/baltistics/'
    )
  })
  test('origin', () => {
    expect(getUrl(INDEX_LT).origin).toEqual('http://kalbynas.lt')
    expect(getUrl(BALTISTICS_LT).origin).toEqual('http://lt.kalbynas.lt')
    expect(getUrl(INDEX_EN).origin).toEqual('http://en.kalbynas.lt')
    expect(getUrl(BALTISTICS_EN).origin).toEqual('https://en.kalbynas.lt')
  })
  test('strict https origin', () => {
    expect(getUrl(INDEX_LT, true).origin).toEqual('https://kalbynas.lt')
    expect(getUrl(BALTISTICS_LT, true).origin).toEqual('https://lt.kalbynas.lt')
    expect(getUrl(INDEX_EN, true).origin).toEqual('https://en.kalbynas.lt')
    expect(getUrl(BALTISTICS_EN, true).origin).toEqual('https://en.kalbynas.lt')
  })
  test('search params', () => {
    expect(getUrl(BALTISTICS_LT).searchParams).toEqual(
      new URLSearchParams({one: 'two', three: 'four'})
    )
    expect(getUrl(BALTISTICS_EN).searchParams).toEqual(new URLSearchParams({}))
  })
})
