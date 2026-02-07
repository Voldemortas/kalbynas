import {
  getPalatalizedRoot,
  getUnpalatalizedRoot,
  isRootMonosyllabic,
  stripAllAccents,
  stripShortCircumflex,
} from 'back/api/utils.ts'
import type {MoodType} from 'back/api/types.ts'

export function conjugateMobileO(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return {
    sg1: `${stresslessRoot}au\u0303`,
    sg2: `${stresslessRoot}ai\u0303`,
    sg3: `${root}o`,
    pl1: `${root}ome`,
    pl2: `${root}ote`,
    pl3: `${root}o`,
  }
}

export function conjugateImmobileO(root: string): MoodType {
  return {
    sg1: `${root}au`,
    sg2: `${root}ai`,
    sg3: `${root}o`,
    pl1: `${root}ome`,
    pl2: `${root}ote`,
    pl3: `${root}o`,
  }
}

export function conjugateMobileI(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return {
    sg1:
      `${getPalatalizedRoot(stresslessRoot)}iu`.replace(/iiu$/, 'iu') +
      `\u0300`,
    sg2: `${stresslessRoot}i\u0300`,
    sg3: `${root}i`,
    pl1: `${root}ime`,
    pl2: `${root}ite`,
    pl3: `${root}i`,
  }
}

export function conjugateImmobileI(root: string): MoodType {
  return {
    sg1: `${getPalatalizedRoot(root)}iu`.replace(/iiu$/, 'iu'),
    sg2: `${root}i`,
    sg3: `${root}i`,
    pl1: `${root}ime`,
    pl2: `${root}ite`,
    pl3: `${root}i`,
  }
}

export function conjugateMobileA(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return {
    sg1: `${stresslessRoot}u\u0300`,
    sg2:
      `${getUnpalatalizedRoot(stresslessRoot)}i`.replace(/ii$/, 'i') + `\u0300`,
    sg3: `${root}a`,
    pl1: `${root}ame`,
    pl2: `${root}ate`,
    pl3: `${root}a`,
  }
}

export function conjugateImmobileA(root: string): MoodType {
  return {
    sg1: `${root}u`,
    sg2: `${getUnpalatalizedRoot(root)}i`.replace(/ii$/, 'i'),
    sg3: `${root}a`,
    pl1: `${root}ame`,
    pl2: `${root}ate`,
    pl3: `${root}a`,
  }
}

export function conjugateMobileE(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return {
    sg1:
      `${getPalatalizedRoot(stresslessRoot)}iau`.replace(/iiau$/, 'iau') +
      `\u0303`,
    sg2: `${stresslessRoot}ei\u0303`,
    sg3: `${root}ė`,
    pl1: `${root}ėme`,
    pl2: `${root}ėte`,
    pl3: `${root}ė`,
  }
}

export function conjugateImmobileE(root: string): MoodType {
  return {
    sg1: `${getPalatalizedRoot(root)}iau`.replace(/iiau$/, 'iau'),
    sg2: `${root}ei`,
    sg3: `${root}ė`,
    pl1: `${root}ėme`,
    pl2: `${root}ėte`,
    pl3: `${root}ė`,
  }
}

export function conjugateFuture(root: string): MoodType {
  const accentlessRoot = stripAllAccents(root)
  const isMonosyllabicAndEndsInYU =
    accentlessRoot !== 'vy' &&
    accentlessRoot !== 'siū' &&
    /[yū]$/.test(accentlessRoot) &&
    isRootMonosyllabic(accentlessRoot)
  const thirdRoot = isMonosyllabicAndEndsInYU
    ? root.replaceAll(
        /(.+)([yū])([\u0301\u0303]?)$/g,
        (m, r: string, v: string, a: string) =>
          `${r}${v === 'y' ? 'i' : 'u'}${a !== '' ? `\u0300` : ''}`
      )
    : root

  function appendFutureSuffix(r: string, ending: string) {
    const stem = r + 's'
    return stem.replace(/ss$/, 's').replace(/[šž]s$/, 'š') + ending
  }

  return {
    sg1: appendFutureSuffix(root, 'iu'),
    sg2: appendFutureSuffix(root, 'i'),
    sg3: appendFutureSuffix(thirdRoot, ''),
    pl1: appendFutureSuffix(root, 'ime'),
    pl2: appendFutureSuffix(root, 'ite'),
    pl3: appendFutureSuffix(thirdRoot, ''),
  }
}

export const copulaPresent: MoodType = {
  sg1: `esu\u0300`,
  sg2: `esi\u0300`,
  sg3: `yra\u0300`,
  pl1: `e\u0303same`,
  pl2: `e\u0303sate`,
  pl3: `yra\u0300`,
}
