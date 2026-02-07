import {
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
} from 'back/api/conjugations.ts'
import {
  getInfinitiveRoot,
  getPastRoot,
  getPresentRoot,
  stripAllAccents,
  stripShortCircumflex,
} from 'back/api/utils.ts'
import type {MoodType, GroupKeysType} from 'back/api/types.ts'

export const GROUPS: Record<GroupKeysType, (roots: string[]) => MoodType> = {
  presInd,
  pastInd,
  pastFreqInd,
  futInd,
}

export function presInd(roots: string[]): MoodType {
  if (stripAllAccents(roots.join('-')) === `būti-yra-buvo`) {
    if (roots[1] === `yra\u0300`) {
      return copulaPresent
    }
    return Object.fromEntries(
      Object.entries(copulaPresent).map(([key, value]) => [
        key,
        stripShortCircumflex(value),
      ])
    ) as MoodType
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
  return conjugateFuture(root)
}
