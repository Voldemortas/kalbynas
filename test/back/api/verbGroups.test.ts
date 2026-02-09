import {describe, expect, it, spyOn} from 'bun:test'

import {futInd, pastFreqInd, pastInd, presInd} from 'back/api/verbGroups.ts'
import {copulaPresent, siutiFuture, vytiFuture} from 'back/api/conjugations.ts'
import * as conjugations from 'back/api/conjugations'
import {stripAllAccents, stripAllAccentsFromParadigm} from 'back/api/utils.ts'
import type {MoodType} from 'back/api/types.ts'

const ACCENT_MOBILITY = {
  [``]: 'Immobile',
  [`\u0301`]: 'Immobile',
  [`\u0300`]: 'Mobile',
  [`\u0303`]: 'Mobile',
}

describe('verb groups', () => {
  const accentKeys = Object.keys(ACCENT_MOBILITY)
  describe('present indicative', () => {
    it('conjugates copula', () => {
      const buti = [`bū\u0301ti`, `yra\u0300`, `bu\u0300vo`]
      expect(presInd(buti)).toMatchObject(copulaPresent)
      expect(presInd(buti.map(stripAllAccents))).toMatchObject(
        stripAllAccentsFromParadigm(copulaPresent)
      )
    })
    it.each(accentKeys)('conjugates co%scia', (accent) => {
      const [roots, stem] = makePresentVerb('ia', accent)
      const mood = makeRandomMood()
      const spy = spyOn(
        conjugations,
        //@ts-ignore
        `conjugate${ACCENT_MOBILITY[accent as keyof typeof ACCENT_MOBILITY]}A`
      )
      spy.mockImplementation((r) => mood)
      expect(presInd(roots)).toMatchObject(mood)
      expect(spy).toHaveBeenCalledWith(stem + 'i')
      spy.mockRestore()
    })
    it.each(
      [
        ['a', 'A'],
        ['i', 'I'],
        ['o', 'O'],
      ]
        .map(([ending, funcEnding]) =>
          accentKeys.map((key) => [key, ending, funcEnding])
        )
        .flat()
    )('conjugates co%sc%s', (accent, ending, funcEnding) => {
      const [roots, stem] = makePresentVerb(ending, accent)
      const mood = makeRandomMood()
      const spy = spyOn(
        conjugations,
        //@ts-ignore
        `conjugate${ACCENT_MOBILITY[accent as keyof typeof ACCENT_MOBILITY]}${funcEnding}`
      )
      spy.mockImplementation((r) => mood)
      expect(presInd(roots)).toMatchObject(mood)
      expect(spy).toHaveBeenCalledWith(stem)
      spy.mockRestore()
    })
  })
  describe('past indicative', () => {
    it.each(
      [
        ['ė', 'E'],
        ['o', 'O'],
      ]
        .map(([ending, funcEnding]) =>
          accentKeys.map((key) => [key, ending, funcEnding])
        )
        .flat()
    )('conjugates co%sc%s', (accent, ending, funcEnding) => {
      const [roots, stem] = makePastVerb(ending, accent)
      const mood = makeRandomMood()
      const spy = spyOn(
        conjugations,
        //@ts-ignore
        `conjugate${ACCENT_MOBILITY[accent as keyof typeof ACCENT_MOBILITY]}${funcEnding}`
      )
      spy.mockImplementation((r) => mood)
      expect(pastInd(roots)).toMatchObject(mood)
      expect(spy).toHaveBeenCalledWith(stem)
      spy.mockRestore()
    })
  })
  describe('past frequentative indicative', () => {
    it.each(accentKeys)('conjugates co%scti', (accent) => {
      const [roots, stem] = makeInfinitive(accent)
      const mood = makeRandomMood()
      const spy = spyOn(conjugations, 'conjugateImmobileO')
      spy.mockImplementation((r) => mood)
      expect(pastFreqInd(roots)).toMatchObject(mood)
      expect(spy).toHaveBeenCalledWith(stem + 'dav')
      spy.mockRestore()
    })
  })
  describe('future indicative', () => {
    it('conjugates siūti', () => {
      const siuti = [`siū\u0301ti`, `siu\u0300va`, `siu\u0300vo`]
      expect(futInd(siuti)).toMatchObject(siutiFuture)
      expect(futInd(siuti.map(stripAllAccents))).toMatchObject(
        stripAllAccentsFromParadigm(siutiFuture)
      )
    })
    it('conjugates vyti', () => {
      const vyti = [`vy\u0301ti`, `ve\u0303ja`, `vi\u0300jo`]
      expect(futInd(vyti)).toMatchObject(vytiFuture)
      expect(futInd(vyti.map(stripAllAccents))).toMatchObject(
        stripAllAccentsFromParadigm(vytiFuture)
      )
    })
    it.each(accentKeys)('conjugates co%scti', (accent) => {
      const [roots, stem] = makeInfinitive(accent)
      const mood = makeRandomMood()
      const spy = spyOn(conjugations, 'conjugateFuture')
      spy.mockImplementation((r) => mood)
      expect(futInd(roots)).toMatchObject(mood)
      expect(spy).toHaveBeenCalledWith(stem)
      spy.mockRestore()
    })
  })
})

function makeInfinitive(accent: string = '') {
  return [[`co${accent}cti`, `_`, `_`], `co${accent}c`] as [string[], string]
}

function makePresentVerb(ending: string, accent: string = '') {
  return [[`_`, `co${accent}c${ending}`, `_`], `co${accent}c`] as [
    string[],
    string,
  ]
}

function makePastVerb(ending: string, accent: string = '') {
  return [[`_`, `_`, `co${accent}c${ending}`], `co${accent}c`] as [
    string[],
    string,
  ]
}

function makeRandomMood(): MoodType {
  const root = Math.random() + ``
  return Object.fromEntries(
    Object.entries(copulaPresent).map(([key]) => [key, root])
  ) as MoodType
}
