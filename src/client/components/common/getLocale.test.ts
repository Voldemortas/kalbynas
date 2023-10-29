import useLanguage from './getLocale'
import {describe, expect, test} from 'bun:test'

describe('getLocale', () => {
  test('default path', () => {
    const language = useLanguage('/')
    expect('').toStrictEqual(language)
  })
  test('/en/labas', () => {
    const language = useLanguage('/en/labas')
    expect('en').toStrictEqual(language)
  })
  test('/labas', () => {
    const language = useLanguage('/labas')
    expect('').toStrictEqual(language)
  })
  test('/lt/labas', () => {
    const language = useLanguage('/lt/labas')
    expect('lt').toStrictEqual(language)
  })
  test('/lt', () => {
    const language = useLanguage('/lt')
    expect('lt').toStrictEqual(language)
  })
  test('/de', () => {
    const language = useLanguage('/de')
    expect('').toStrictEqual(language)
  })
})

