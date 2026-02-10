import {
  appendSuffixWithAssimilation,
  getPalatalizedRoot,
  getUnpalatalizedRoot,
  isRootMonosyllabic,
  metatonise3rdFuture,
  orderMood,
  stripAllAccents,
  stripShortCircumflex,
} from 'back/api/utils.ts'
import type {MoodType} from 'back/api/types.ts'

export function conjugateMobileO(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return orderMood({
    sg1: `${stresslessRoot}au\u0303`,
    sg2: `${stresslessRoot}ai\u0303`,
    ...conjugateThematicThirdAndPlural(root, 'o'),
  })
}

export function conjugateImmobileO(root: string): MoodType {
  return orderMood({
    sg1: `${root}au`,
    sg2: `${root}ai`,
    ...conjugateThematicThirdAndPlural(root, 'o'),
  })
}

export function conjugateMobileI(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return orderMood({
    sg1:
      `${getPalatalizedRoot(stresslessRoot)}iu`.replace(/iiu$/, 'iu') +
      `\u0300`,
    sg2: `${stresslessRoot}i\u0300`,
    ...conjugateThematicThirdAndPlural(root, 'i'),
  })
}

export function conjugateImmobileI(root: string): MoodType {
  return orderMood({
    sg1: `${getPalatalizedRoot(root)}iu`.replace(/iiu$/, 'iu'),
    sg2: `${root}i`,
    ...conjugateThematicThirdAndPlural(root, 'i'),
  })
}

export function conjugateMobileA(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return orderMood({
    sg1: `${stresslessRoot}u\u0300`,
    sg2:
      `${getUnpalatalizedRoot(stresslessRoot)}i`.replace(/ii$/, 'i') + `\u0300`,
    ...conjugateThematicThirdAndPlural(root, 'a'),
  })
}

export function conjugateImmobileA(root: string): MoodType {
  return orderMood({
    sg1: `${root}u`,
    sg2: `${getUnpalatalizedRoot(root)}i`.replace(/ii$/, 'i'),
    ...conjugateThematicThirdAndPlural(root, 'a'),
  })
}

export function conjugateMobileE(root: string): MoodType {
  const stresslessRoot = stripShortCircumflex(root)
  return orderMood({
    sg1:
      `${getPalatalizedRoot(stresslessRoot)}iau`.replace(/iiau$/, 'iau') +
      `\u0303`,
    sg2: `${stresslessRoot}ei\u0303`,
    ...conjugateThematicThirdAndPlural(root, 'ė'),
  })
}

export function conjugateImmobileE(root: string): MoodType {
  return orderMood({
    sg1: `${getPalatalizedRoot(root)}iau`.replace(/iiau$/, 'iau'),
    sg2: `${root}ei`,
    ...conjugateThematicThirdAndPlural(root, 'ė'),
  })
}

function conjugateThematicThirdAndPlural(
  root: string,
  theme: string
): Omit<MoodType, 'sg1' | 'sg2'> {
  return {
    sg3: `${root}${theme}`,
    pl3: `${root}${theme}`,
    ...conjugateThematicPlural(root, theme),
  }
}

function conjugateThematicPlural(
  root: string,
  theme: string
): Pick<MoodType, 'pl1' | 'pl2'> {
  return {
    pl1: `${root}${theme}me ${root}${theme}m`,
    pl2: `${root}${theme}te ${root}${theme}t`,
  }
}

export function conjugateFuture(root: string): MoodType {
  const accentlessRoot = stripAllAccents(root)
  const isMonosyllabicAndEndsInYU =
    /[yū]$/.test(accentlessRoot) && isRootMonosyllabic(accentlessRoot)
  const thirdRoot = isMonosyllabicAndEndsInYU
    ? root.replaceAll(
        /(.+)([yū])([\u0301\u0303]?)$/g,
        (_, r: string, v: string, a: string) =>
          `${r}${v === 'y' ? 'i' : 'u'}${a !== '' ? `\u0300` : ''}`
      )
    : root

  const appendFutureSuffix = (r: string) =>
    appendSuffixWithAssimilation(r, 's', [
      [/[sz]s$/, 's'],
      [/[šž]s$/, 'š'],
    ])

  const non3rd = appendFutureSuffix(root)

  const third = metatonise3rdFuture(appendFutureSuffix(thirdRoot))

  return orderMood({
    ...conjugateThematicThirdAndPlural(non3rd, 'i'),
    sg1: `${non3rd}iu`,
    sg2: `${non3rd}i`,
    sg3: third,
    pl3: third,
  })
}

export function conjugateConditional(root: string): MoodType {
  const suffixedRoot = root + 't'
  return orderMood({
    sg1: `${getPalatalizedRoot(suffixedRoot)}au`,
    sg2: `${suffixedRoot}um ${suffixedRoot}umei`,
    sg3: `${suffixedRoot}ų`,
    pl1: `${suffixedRoot}umėme ${suffixedRoot}umėm ${suffixedRoot}ume`,
    pl2: `${suffixedRoot}umėte ${suffixedRoot}umėt ${suffixedRoot}ute`,
    pl3: `${suffixedRoot}ų`,
  })
}

export const copulaPresent: MoodType = orderMood({
  sg1: `esu\u0300`,
  sg2: `esi\u0300`,
  sg3: `yra\u0300`,
  ...conjugateThematicPlural(`e\u0303s`, 'a'),
  pl3: `yra\u0300`,
})

export const vytiFuture: MoodType = orderMood({
  sg1: `vy\u0301siu`,
  sg2: `vy\u0301si`,
  sg3: `vy\u0303s`,
  ...conjugateThematicPlural(`vy\u0301s`, 'i'),
  pl3: `vy\u0303s`,
})

export const siutiFuture: MoodType = orderMood({
  sg1: `siū\u0301siu`,
  sg2: `siū\u0301si`,
  sg3: `siū\u0303s`,
  ...conjugateThematicPlural(`siū\u0301s`, 'i'),
  pl3: `siū\u0303s`,
})
