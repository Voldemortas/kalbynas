import {describe, expect, it} from 'bun:test'

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
  //COND
  `žai\u0303s`,
] as const
type keysType = (typeof KEYS)[number]

const DATA: Record<keysType, MoodType> = {
  [`de\u0303d`]: {
    sg1: `dedu\u0300`,
    sg2: `dedi\u0300`,
    sg3: `de\u0303da`,
    pl1: `de\u0303dame de\u0303dam`,
    pl2: `de\u0303date de\u0303dat`,
    pl3: `de\u0303da`,
  },
  [`ša\u0301un`]: {
    sg1: `ša\u0301unu`,
    sg2: `ša\u0301uni`,
    sg3: `ša\u0301una`,
    pl1: `ša\u0301uname ša\u0301unam`,
    pl2: `ša\u0301unate ša\u0301unat`,
    pl3: `ša\u0301una`,
  },
  [`pu\u0300či`]: {
    sg1: `pučiu\u0300`,
    sg2: `puti\u0300`,
    sg3: `pu\u0300čia`,
    pl1: `pu\u0300čiame pu\u0300čiam`,
    pl2: `pu\u0300čiate pu\u0300čiat`,
    pl3: `pu\u0300čia`,
  },
  [`le\u0301idži`]: {
    sg1: `le\u0301idžiu`,
    sg2: `le\u0301idi`,
    sg3: `le\u0301idžia`,
    pl1: `le\u0301idžiame le\u0301idžiam`,
    pl2: `le\u0301idžiate le\u0301idžiat`,
    pl3: `le\u0301idžia`,
  },
  [`no\u0301r`]: {
    sg1: `no\u0301riu`,
    sg2: `no\u0301ri`,
    sg3: `no\u0301ri`,
    pl1: `no\u0301rime no\u0301rim`,
    pl2: `no\u0301rite no\u0301rit`,
    pl3: `no\u0301ri`,
  },
  [`ty\u0303l`]: {
    sg1: `tyliu\u0300`,
    sg2: `tyli\u0300`,
    sg3: `ty\u0303li`,
    pl1: `ty\u0303lime ty\u0303lim`,
    pl2: `ty\u0303lite ty\u0303lit`,
    pl3: `ty\u0303li`,
  },
  [`žy\u0301d`]: {
    sg1: `žy\u0301džiu`,
    sg2: `žy\u0301di`,
    sg3: `žy\u0301di`,
    pl1: `žy\u0301dime žy\u0301dim`,
    pl2: `žy\u0301dite žy\u0301dit`,
    pl3: `žy\u0301di`,
  },
  [`švy\u0303t`]: {
    sg1: `švyčiu\u0300`,
    sg2: `švyti\u0300`,
    sg3: `švy\u0303ti`,
    pl1: `švy\u0303time švy\u0303tim`,
    pl2: `švy\u0303tite švy\u0303tit`,
    pl3: `švy\u0303ti`,
  },
  [`da\u0303r`]: {
    sg1: `darau\u0303`,
    sg2: `darai\u0303`,
    sg3: `da\u0303ro`,
    pl1: `da\u0303rome da\u0303rom`,
    pl2: `da\u0303rote da\u0303rot`,
    pl3: `da\u0303ro`,
  },
  [`ta\u0301ik`]: {
    sg1: `ta\u0301ikau`,
    sg2: `ta\u0301ikai`,
    sg3: `ta\u0301iko`,
    pl1: `ta\u0301ikome ta\u0301ikom`,
    pl2: `ta\u0301ikote ta\u0301ikot`,
    pl3: `ta\u0301iko`,
  },
  [`mai\u0303š`]: {
    sg1: `maišiau\u0303`,
    sg2: `maišei\u0303`,
    sg3: `mai\u0303šė`,
    pl1: `mai\u0303šėme mai\u0303šėm`,
    pl2: `mai\u0303šėte mai\u0303šėt`,
    pl3: `mai\u0303šė`,
  },
  [`gė\u0301l`]: {
    sg1: `gė\u0301liau`,
    sg2: `gė\u0301lei`,
    sg3: `gė\u0301lė`,
    pl1: `gė\u0301lėme gė\u0301lėm`,
    pl2: `gė\u0301lėte gė\u0301lėt`,
    pl3: `gė\u0301lė`,
  },
  [`ly\u0301`]: {
    sg1: `ly\u0301siu`,
    sg2: `ly\u0301si`,
    sg3: `li\u0300s`,
    pl1: `ly\u0301sime ly\u0301sim`,
    pl2: `ly\u0301site ly\u0301sit`,
    pl3: `li\u0300s`,
  },
  [`mė\u0303ž`]: {
    sg1: `mė\u0303šiu`,
    sg2: `mė\u0303ši`,
    sg3: `mė\u0303š`,
    pl1: `mė\u0303šime mė\u0303šim`,
    pl2: `mė\u0303šite mė\u0303šit`,
    pl3: `mė\u0303š`,
  },
  [`brė\u0301kš`]: {
    sg1: `brė\u0301kšiu`,
    sg2: `brė\u0301kši`,
    sg3: `brė\u0303kš`,
    pl1: `brė\u0301kšime brė\u0301kšim`,
    pl2: `brė\u0301kšite brė\u0301kšit`,
    pl3: `brė\u0303kš`,
  },
  [`sly\u0301s`]: {
    sg1: `sly\u0301siu`,
    sg2: `sly\u0301si`,
    sg3: `sly\u0303s`,
    pl1: `sly\u0301sime sly\u0301sim`,
    pl2: `sly\u0301site sly\u0301sit`,
    pl3: `sly\u0303s`,
  },
  [`ta\u0301iky`]: {
    sg1: `ta\u0301ikysiu`,
    sg2: `ta\u0301ikysi`,
    sg3: `ta\u0301ikys`,
    pl1: `ta\u0301ikysime ta\u0301ikysim`,
    pl2: `ta\u0301ikysite ta\u0301ikysit`,
    pl3: `ta\u0301ikys`,
  },
  [`laiky\u0301`]: {
    sg1: `laiky\u0301siu`,
    sg2: `laiky\u0301si`,
    sg3: `laiky\u0303s`,
    pl1: `laiky\u0301sime laiky\u0301sim`,
    pl2: `laiky\u0301site laiky\u0301sit`,
    pl3: `laiky\u0303s`,
  },
  [`žai\u0303s`]: {
    sg1: `žai\u0303sčiau`,
    sg2: `žai\u0303stum žai\u0303stumei`,
    sg3: `žai\u0303stų`,
    pl1: `žai\u0303stumėme žai\u0303stumėm žai\u0303stume`,
    pl2: `žai\u0303stumėte žai\u0303stumėt žai\u0303stute`,
    pl3: `žai\u0303stų`,
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
  describe('conjugate Cond', () => {
    runTest(`žai\u0303s`, conjugateConditional)
  })
})

function runTest(root: keysType, func: (r: string) => MoodType) {
  it(`conjugates ${root}–`, () => {
    expect(func(root)).toMatchObject(DATA[root])
  })
}
