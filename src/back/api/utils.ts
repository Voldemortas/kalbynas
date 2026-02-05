import {
  infinitiveRootError,
  pastRootError,
  presentRootError,
  threeRootsError,
} from 'back/api/errors.ts'

const consonants = 'bcčdfghjklmnprsštvzž'
const vowels = 'aąeęėiįyouųū'

export function stripShortCircumflex(root: string) {
  return root.replaceAll(/[\u0303\u0300]/g, '')
}

export function stripAllAccents(root: string) {
  return root.replaceAll(/[\u0303\u0300\u0301]/g, '')
}

export function getUnpalatalizedRoot(root: string) {
  return root.replace(/či$/, 't').replace(/dži$/, 'd')
}

export function getPalatalizedRoot(root: string) {
  return root.replace(/t$/, 'či').replace(/d$/, 'dži')
}

export function getPresentRoot(roots: string[]): {
  root: string
  pattern: 'a' | 'i' | 'o'
} {
  if (roots.length !== 3) {
    throw threeRootsError
  }
  const regexArr = /^(.+)([aio]\u0300?)$/.exec(roots[1])
  if (regexArr === null) {
    throw presentRootError
  }
  return {root: regexArr[1], pattern: regexArr[2] as 'a' | 'i' | 'o'}
}

export function getPastRoot(roots: string[]): {
  root: string
  pattern: 'ė' | 'o'
} {
  if (roots.length !== 3) {
    throw threeRootsError
  }
  const regexArr = /^(.+)([ėo])$/.exec(roots[2])
  if (regexArr === null) {
    throw pastRootError
  }
  return {root: regexArr[1], pattern: regexArr[2] as 'ė' | 'o'}
}

export function getInfinitiveRoot(roots: string[]): {
  root: string
  pattern: 'ti'
} {
  if (roots.length !== 3) {
    throw threeRootsError
  }
  const regexArr = /^(.+)(ti)$/.exec(roots[0])
  if (regexArr === null) {
    throw infinitiveRootError
  }
  return {root: regexArr[1], pattern: regexArr[2] as 'ti'}
}

export function isRootMonosyllabic(root: string) {
  const pattern = new RegExp(
    `^[${consonants}]*?[${vowels}]+[${consonants}]*?$`,
    'i'
  )
  return pattern.test(root)
}
