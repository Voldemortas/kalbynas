import {describe, expect, it} from 'bun:test'

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
} from 'back/api/conjugations'
import type {MoodType} from 'back/api/types.ts'

const KEYS = [
  ///A
  `de\u0303d`,
  `ša\u0301un`,
  `pu\u0300či`,
  `le\u0301idži`,
  ///I
  `no\u0301r`,
  `ty\u0303l`,
  `žy\u0301d`,
  `švy\u0303t`,
  //O
  `da\u0303r`,
  `ta\u0301ik`,
  //Ė
  `gė\u0301l`,
  `mai\u0303š`,
  //FUT
  `ly\u0301`,
  `mė\u0303ž`,
  `brė\u0301kš`,
  `sly\u0301s`,
  `ta\u0301iky`,
  `laiky\u0301`,
] as const
type keysType = (typeof KEYS)[number]

const DATA: Record<keysType, MoodType> = {
  [`de\u0303d`]: {
    sg1: `dedu\u0300`,
    sg2: `dedi\u0300`,
    sg3: `de\u0303da`,
    pl1: `de\u0303dame`,
    pl2: `de\u0303date`,
    pl3: `de\u0303da`,
  },
  [`ša\u0301un`]: {
    sg1: `ša\u0301unu`,
    sg2: `ša\u0301uni`,
    sg3: `ša\u0301una`,
    pl1: `ša\u0301uname`,
    pl2: `ša\u0301unate`,
    pl3: `ša\u0301una`,
  },
  [`pu\u0300či`]: {
    sg1: `pučiu\u0300`,
    sg2: `puti\u0300`,
    sg3: `pu\u0300čia`,
    pl1: `pu\u0300čiame`,
    pl2: `pu\u0300čiate`,
    pl3: `pu\u0300čia`,
  },
  [`le\u0301idži`]: {
    sg1: `le\u0301idžiu`,
    sg2: `le\u0301idi`,
    sg3: `le\u0301idžia`,
    pl1: `le\u0301idžiame`,
    pl2: `le\u0301idžiate`,
    pl3: `le\u0301idžia`,
  },
  [`no\u0301r`]: {
    sg1: `no\u0301riu`,
    sg2: `no\u0301ri`,
    sg3: `no\u0301ri`,
    pl1: `no\u0301rime`,
    pl2: `no\u0301rite`,
    pl3: `no\u0301ri`,
  },
  [`ty\u0303l`]: {
    sg1: `tyliu\u0300`,
    sg2: `tyli\u0300`,
    sg3: `ty\u0303li`,
    pl1: `ty\u0303lime`,
    pl2: `ty\u0303lite`,
    pl3: `ty\u0303li`,
  },
  [`žy\u0301d`]: {
    sg1: `žy\u0301džiu`,
    sg2: `žy\u0301di`,
    sg3: `žy\u0301di`,
    pl1: `žy\u0301dime`,
    pl2: `žy\u0301dite`,
    pl3: `žy\u0301di`,
  },
  [`švy\u0303t`]: {
    sg1: `švyčiu\u0300`,
    sg2: `švyti\u0300`,
    sg3: `švy\u0303ti`,
    pl1: `švy\u0303time`,
    pl2: `švy\u0303tite`,
    pl3: `švy\u0303ti`,
  },
  [`da\u0303r`]: {
    sg1: `darau\u0303`,
    sg2: `darai\u0303`,
    sg3: `da\u0303ro`,
    pl1: `da\u0303rome`,
    pl2: `da\u0303rote`,
    pl3: `da\u0303ro`,
  },
  [`ta\u0301ik`]: {
    sg1: `ta\u0301ikau`,
    sg2: `ta\u0301ikai`,
    sg3: `ta\u0301iko`,
    pl1: `ta\u0301ikome`,
    pl2: `ta\u0301ikote`,
    pl3: `ta\u0301iko`,
  },
  [`mai\u0303š`]: {
    sg1: `maišiau\u0303`,
    sg2: `maišei\u0303`,
    sg3: `mai\u0303šė`,
    pl1: `mai\u0303šėme`,
    pl2: `mai\u0303šėte`,
    pl3: `mai\u0303šė`,
  },
  [`gė\u0301l`]: {
    sg1: `gė\u0301liau`,
    sg2: `gė\u0301lei`,
    sg3: `gė\u0301lė`,
    pl1: `gė\u0301lėme`,
    pl2: `gė\u0301lėte`,
    pl3: `gė\u0301lė`,
  },
  [`ly\u0301`]: {
    sg1: `ly\u0301siu`,
    sg2: `ly\u0301si`,
    sg3: `li\u0300s`,
    pl1: `ly\u0301sime`,
    pl2: `ly\u0301site`,
    pl3: `li\u0300s`,
  },
  [`mė\u0303ž`]: {
    sg1: `mė\u0303šiu`,
    sg2: `mė\u0303ši`,
    sg3: `mė\u0303š`,
    pl1: `mė\u0303šime`,
    pl2: `mė\u0303šite`,
    pl3: `mė\u0303š`,
  },
  [`brė\u0301kš`]: {
    sg1: `brė\u0301kšiu`,
    sg2: `brė\u0301kši`,
    sg3: `brė\u0303kš`,
    pl1: `brė\u0301kšime`,
    pl2: `brė\u0301kšite`,
    pl3: `brė\u0303kš`,
  },
  [`sly\u0301s`]: {
    sg1: `sly\u0301siu`,
    sg2: `sly\u0301si`,
    sg3: `sly\u0303s`,
    pl1: `sly\u0301sime`,
    pl2: `sly\u0301site`,
    pl3: `sly\u0303s`,
  },
  [`ta\u0301iky`]: {
    sg1: `ta\u0301ikysiu`,
    sg2: `ta\u0301ikysi`,
    sg3: `ta\u0301ikys`,
    pl1: `ta\u0301ikysime`,
    pl2: `ta\u0301ikysite`,
    pl3: `ta\u0301ikys`,
  },
  [`laiky\u0301`]: {
    sg1: `laiky\u0301siu`,
    sg2: `laiky\u0301si`,
    sg3: `laiky\u0303s`,
    pl1: `laiky\u0301sime`,
    pl2: `laiky\u0301site`,
    pl3: `laiky\u0303s`,
  },
}

describe('conjugations', () => {
  describe('conjugate A', () => {
    runTest(`le\u0301idži`, conjugateImmobileA)
    runTest(`ša\u0301un`, conjugateImmobileA)
    runTest(`pu\u0300či`, conjugateMobileA)
    runTest(`de\u0303d`, conjugateMobileA)
  })
  describe('conjugate I', () => {
    runTest(`žy\u0301d`, conjugateImmobileI)
    runTest(`no\u0301r`, conjugateImmobileI)
    runTest(`ty\u0303l`, conjugateMobileI)
    runTest(`švy\u0303t`, conjugateMobileI)
  })
  describe('conjugate O', () => {
    runTest(`ta\u0301ik`, conjugateImmobileO)
    runTest(`da\u0303r`, conjugateMobileO)
  })
  describe('conjugate E', () => {
    runTest(`gė\u0301l`, conjugateImmobileE)
    runTest(`mai\u0303š`, conjugateMobileE)
  })
  describe('conjugate FUT', () => {
    runTest(`ly\u0301`, conjugateFuture)
    runTest(`mė\u0303ž`, conjugateFuture)
    runTest(`brė\u0301kš`, conjugateFuture)
    runTest(`sly\u0301s`, conjugateFuture)
    runTest(`ta\u0301iky`, conjugateFuture)
    runTest(`laiky\u0301`, conjugateFuture)
  })
})

function runTest(root: keysType, func: (r: string) => MoodType) {
  it(`conjugates ${root}–`, () => {
    expect(func(root)).toMatchObject(DATA[root])
  })
}
