import {commonStrings} from './common'
import {replaceAllObjectHtmlEntities} from './util'

export default function baltistics({locale}: {locale: string}) {
  const answers: {
    lt: BaltisticsPageType
    en: BaltisticsPageType
  } = {
    lt: {
      h1: 'Garsų atitikmenys baltų kalbose ir tarmėse',
      commonBalticH2: 'Bendrinės baltų kalbos fonologija',
      commonBalticIntro: `Reikia pradėti nuo Bendrinės Baltų Kalbos (toliau BBK) fonologinės sistemos,
      iš kurios tuometinėms tarmėms besivystant, atsirado rytų baltų kalbos,
      kurios nors ir panašios, bet visgi skirtingos.`,
      commonBalticVowels: `Kaip galima pastebėti, visi balsiai išskyrus *ō galėjo būti tiek trumpi,
      tiek ilgi, *ō buvo tik ilgas, nes trumpas Indo-Europiečių prokalbės (toliau
      ide.) *ŏ (ide. *o, *h&#x2083;o, h&#x2083;e) sutapo su trumpuoju *ă.`,
      commonBalticDiphthongsIntro: `Kaip ir lietuvių kalboje, balsiai su pusbalsiais galėjo sudaryti (mišriuosius) dvigarsius:`,
      commonBalticDiphthongsOutro: `Dvibalsių, kurių pirmasis dėmuo buvo ilgasis balsis nėra apstu ir jie
      dažniausiai aptinkami galūnėse, tačia retsykiais jie pasitaikydavo ir
      šaknyse, kaip kad žodyje *dōu̯bē (duobė). Dvigarsiai dėl kurių neabejojama
      yra pažymėti žaliu fonu. Dėl *ii̯ > *ī,
      *uu̯ > *ū nėra lengva sutarti, tačiau gali būt, kad toks procesas vyko dar
      prieš BBK, o vėliau buvo išplėtotas labiau.`,
      eastBalticH2: 'Rytų Baltų fonologinė raida',
      eastBalticIntro: `Bene svarbiausias ir kone vienintelis fonologinis skirtumas tarp vakarų ir
      rytų baltų (toliau RB) yra BKK dvigarsių *ei, (rečiau *ai, *e&#x0304;i,
      *a&#x0304;i) pakeitimas atskira fonema > *e&#x0304;&#x2081;, tačiau šio
      pakitimo dažnis tarp rytų baltų kalbų skiriasi - latvių ir latgalių kalbose
      jis labai dažnas, o lietuvių ir žemaičių k. - retesnis.`,
      eastBalticOutro: 'Tuo tarpu priebalsių sistema išliko ta pati.',
      personalisedChangeH2: 'Atskirų rytų baltų kalbų ir tarmių kaita',
      toBeContinued: 'Laukite tęsinio...',
      labials: commonStrings.lt.labials,
      coronals: commonStrings.lt.coronals,
      dorsals: commonStrings.lt.dorsals,
      plosives: commonStrings.lt.plosives,
      sibilants: commonStrings.lt.sibilants,
      sonorants: commonStrings.lt.sonorants,
      commonConsonantsCaption: 'BBK priebalsiai',
      commonVowelsCaption: 'BBK balsiai',
      longEasternVowelsCaption: 'ilgieji rytų baltų balsiai',
      shortEasternVowelsCaption: 'trumpieji rytų baltų balsiai',
    },
    en: {
      h1: 'Sound correspondences of Eastern Baltic languages and lects',
      commonBalticH2: 'Phonology of Common Baltic ',
      commonBalticIntro: `The story must begin with the Common-Baltic (later CB) phonological inventory from which each of the languages will diverge very similarly and yet with differences.`,
      commonBalticVowels: `As seen in the Table 2 CB vowels, all vowels except for the *ō had long and short counterparts, *ō, however, was only long as the short ŏ (PIE *o, *h₃o, *h&#x2083;e) merged with the short *ă. `,
      commonBalticDiphthongsIntro: `Due to the accentuation/prosody and the upcoming sound changes it’s worth mentioning that every member of the sonorants class could form a phonetic tautosyllabic diphthong: `,
      commonBalticDiphthongsOutro: `The existence of diphthongs where the first member is long is basically limited to happen in the inflectional endings, although, the word *dōu̯bē (a pit) is believed to have had it in the root. In the table CB diphthongs diphthongs in the non-green background are dubious. The cases of *ii̯ > *ī, *uu̯ > *ū are uncertain as it might have happened in in Pre-Common-Baltic times and later it probably got extended even more.`,
      eastBalticH2: 'Developments of Common Eastern Baltic phonology',
      eastBalticIntro: `The most important and probably the sole phonological difference setting Western and Easter Balts (later EB) apart is the the dipthongs *ei, (less common *ai, *ēi, *āi) becoming a separate foneme > *ē₁. Yet the frequency of this change differs among languages - Latvian and Latgalian have it more frequently while in Lithuanian and Samogitian it's rarer. `,
      eastBalticOutro: 'Meanwhile the consonant system remained the same.',
      personalisedChangeH2: 'Developments of each Eastern Baltic language',
      toBeContinued: 'To be continued',
      labials: commonStrings.en.labials,
      coronals: commonStrings.en.coronals,
      dorsals: commonStrings.en.dorsals,
      plosives: commonStrings.en.plosives,
      sibilants: commonStrings.en.sibilants,
      sonorants: commonStrings.en.sonorants,
      commonConsonantsCaption: 'CB consonants',
      commonVowelsCaption: 'CB vowels',
      longEasternVowelsCaption: 'EB long vowels ',
      shortEasternVowelsCaption: 'EB short vowels',
    },
  }

  return replaceAllObjectHtmlEntities(answers[locale as 'lt'] ?? answers.lt)
}

export type BaltisticsPageType = {
  h1: string
  commonBalticH2: string
  commonBalticIntro: string
  commonBalticVowels: string
  commonBalticDiphthongsIntro: string
  commonBalticDiphthongsOutro: string
  eastBalticH2: string
  eastBalticIntro: string
  eastBalticOutro: string
  personalisedChangeH2: string
  toBeContinued: string
  labials: string
  coronals: string
  dorsals: string
  plosives: string
  sibilants: string
  sonorants: string
  commonConsonantsCaption: string
  commonVowelsCaption: string
  longEasternVowelsCaption: string
  shortEasternVowelsCaption: string
}

