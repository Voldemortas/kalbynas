import config from '../getConfig'
import changeUrlToLocale from './changeUrlToLocale'
import {describe, expect, test} from 'bun:test'

const CONFIG = {
  ...config,
  defaultLanguage: 'lt',
  acceptedLanguages: ['lt', 'en', 'de'],
}

describe('changeUrlToLocale', () => {
  test('/ > /#', () => {
    const newPath = changeUrlToLocale('lt', '/', CONFIG)
    expect('/#').toStrictEqual(newPath)
  })
  test('/en/test# > /en/test#', () => {
    const newPath = changeUrlToLocale('en', '/en/test', CONFIG)
    expect('/en/test#').toStrictEqual(newPath)
  })
  test('/en > /', () => {
    const newPath = changeUrlToLocale('lt', '/en', CONFIG)
    expect('/').toStrictEqual(newPath)
  })
  test('/en/test > /test', () => {
    const newPath = changeUrlToLocale('lt', '/en/test', CONFIG)
    expect('/test').toStrictEqual(newPath)
  })
  test('/ > /en', () => {
    const newPath = changeUrlToLocale('en', '/', CONFIG)
    expect('/en').toStrictEqual(newPath)
  })
  test('/test > /en/test', () => {
    const newPath = changeUrlToLocale('en', '/test', CONFIG)
    expect('/en/test').toStrictEqual(newPath)
  })
  test('/en > /de', () => {
    const newPath = changeUrlToLocale('de', '/en', CONFIG)
    expect('/de').toStrictEqual(newPath)
  })
  test('/en/test > /de/test', () => {
    const newPath = changeUrlToLocale('de', '/en/test', CONFIG)
    expect('/de/test').toStrictEqual(newPath)
  })
  test('/en > /fr', () => {
    const newPath = changeUrlToLocale('fr', '/en', CONFIG)
    expect('/en#').toStrictEqual(newPath)
  })
  test('/en/test > /fr/test', () => {
    const newPath = changeUrlToLocale('fr', '/en/test', CONFIG)
    expect('/en/test#').toStrictEqual(newPath)
  })
})

