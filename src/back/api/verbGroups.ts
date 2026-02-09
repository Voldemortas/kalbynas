import {
  conjugateConditional,
  conjugateFuture,
  conjugateImmobileA,
  conjugateImmobileE,
  conjugateImmobileI,
  conjugateImmobileO,
  conjugateMobileA,
  conjugateMobileE,
  conjugateMobileI,
  conjugateMobileO,
  copulaPresent,
  siutiFuture,
  vytiFuture,
} from 'back/api/conjugations.ts'
import {
  getInfinitiveRoot,
  getPastRoot,
  getPresentRoot,
  stripAllAccents,
  stripAllAccentsFromParadigm,
} from 'back/api/utils.ts'
import type {MoodType, GroupKeysType} from 'back/api/types.ts'

export const GROUPS: Record<GroupKeysType, (roots: string[]) => MoodType> = {
  presInd,
  pastInd,
  pastFreqInd,
  futInd,
  cond,
}

export function presInd(roots: string[]): MoodType {
  if (stripAllAccents(roots.join('-')) === `būti-yra-buvo`) {
    if (roots[1] === `yra\u0300`) {
      return copulaPresent
    }
    return stripAllAccentsFromParadigm(copulaPresent)
  }

  const {root, pattern} = getPresentRoot(roots)
  const isShortOrCircumflex = root.includes(`\u0300`) || root.includes(`\u0303`)
  if (pattern === 'o') {
    return isShortOrCircumflex
      ? conjugateMobileO(root)
      : conjugateImmobileO(root)
  }
  if (pattern === 'i') {
    return isShortOrCircumflex
      ? conjugateMobileI(root)
      : conjugateImmobileI(root)
  }
  return isShortOrCircumflex ? conjugateMobileA(root) : conjugateImmobileA(root)
}

export function pastInd(roots: string[]): MoodType {
  const {root, pattern} = getPastRoot(roots)
  const isShortOrCircumflex = root.includes(`\u0300`) || root.includes(`\u0303`)
  if (pattern === 'o') {
    return isShortOrCircumflex
      ? conjugateMobileO(root)
      : conjugateImmobileO(root)
  }
  if (pattern === 'ė') {
    return isShortOrCircumflex
      ? conjugateMobileE(root)
      : conjugateImmobileE(root)
  }
  return isShortOrCircumflex ? conjugateMobileA(root) : conjugateImmobileA(root)
}

export function pastFreqInd(roots: string[]): MoodType {
  const {root} = getInfinitiveRoot(roots)
  return conjugateImmobileO(root + 'dav')
}

export function futInd(roots: string[]): MoodType {
  const {root} = getInfinitiveRoot(roots)
  const dict = new Map([
    [`vy`, stripAllAccentsFromParadigm(vytiFuture)],
    [`vy\u0301`, vytiFuture],
    [`siū`, stripAllAccentsFromParadigm(siutiFuture)],
    [`siū\u0301`, siutiFuture],
  ])
  if (dict.has(root)) {
    return dict.get(root)!
  }
  return conjugateFuture(root)
}

export function cond(roots: string[]): MoodType {
  const {root} = getInfinitiveRoot(roots)
  return conjugateConditional(root)
}
