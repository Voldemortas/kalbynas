import Translation, {type Translations} from './Translation'

const translations: Translations = {
  h1: new Translation({
    lt: 'Garsų atitikmenys baltų kalbose ir tarmėse',
    en: 'Sound correspondences of Eastern Baltic languages and lects',
  }),
  commonBalticH2: new Translation({
    lt: 'Bendrinės baltų kalbos fonologija',
    en: 'Phonology of Common Baltic ',
  }),
  commonBalticIntro: new Translation({
    lt: 'Reikia pradėti nuo Bendrinės Baltų Kalbos (toliau BBK) fonologinės sistemos, iš kurios tuometinėms tarmėms besivystant, atsirado rytų baltų kalbos, kurios nors ir panašios, bet visgi skirtingos.',
    en: 'The story must begin with the Common-Baltic (later CB) phonological inventory from which each of the languages will diverge very similarly and yet with differences.',
  }),
  commonBalticVowels: new Translation({
    lt: 'Kaip galima pastebėti, visi balsiai išskyrus *ō galėjo būti tiek trumpi, tiek ilgi, *ō buvo tik ilgas, nes trumpas Indo-Europiečių prokalbės (toliau ide.) *ŏ (ide. *o, *h\u2083o, h\u2083e) sutapo su trumpuoju *ă.',
    en: 'As seen in the Table 2 CB vowels, all vowels except for the *ō had long and short counterparts, *ō, however, was only long as the short ŏ (PIE *o, *h₃o, *h\u2083e) merged with the short *ă. ',
  }),
  commonBalticDiphthongsIntro: new Translation({
    lt: 'Kaip ir lietuvių kalboje, balsiai su pusbalsiais galėjo sudaryti (mišriuosius) dvigarsius:',
    en: 'Due to the accentuation/prosody and the upcoming sound changes it’s worth mentioning that every member of the sonorants class could form a phonetic tautosyllabic diphthong: ',
  }),
  commonBalticDiphthongsOutro: new Translation({
    lt: `Dvibalsių, kurių pirmasis dėmuo buvo ilgasis balsis nėra apstu ir jie dažniausiai aptinkami galūnėse, tačia retsykiais jie pasitaikydavo ir šaknyse, kaip kad žodyje *dōu̯bē (duobė). 
        Dvigarsiai dėl kurių neabejojama yra pažymėti žaliu fonu. Dėl *ii̯ > *ī, *uu̯ > *ū nėra lengva sutarti, tačiau gali būt, kad toks procesas vyko dar prieš BBK, o vėliau buvo išplėtotas labiau.`,
    en: `The existence of diphthongs where the first member is long is basically limited to happen in the inflectional endings, although, the word *dōu̯bē (a pit) is believed to have had it in the root. 
        In the table CB diphthongs diphthongs in the non-green background are dubious. The cases of *ii̯ > *ī, *uu̯ > *ū are uncertain as it might have happened in in Pre-Common-Baltic times and later it probably got extended even more.`,
  }),
  eastBalticH2: new Translation({
    lt: 'Rytų Baltų fonologinė raida',
    en: 'Developments of Common Eastern Baltic phonology',
  }),
  eastBalticIntro: new Translation({
    lt: `Bene svarbiausias ir kone vienintelis fonologinis skirtumas tarp vakarų ir rytų baltų (toliau RB) yra BKK dvigarsių *ei, (rečiau *ai, *ēi, *āi) pakeitimas atskira fonema > *ē₁, 
        tačiau šio pakitimo dažnis tarp rytų baltų kalbų skiriasi - latvių ir latgalių kalbose jis labai dažnas, o lietuvių ir žemaičių k. - kiek retesnis.`,
    en: `The most important and probably the sole phonological difference setting Western and Easter Balts (later EB) apart is the the diphthongs *ei, (less common *ai, *ēi, *āi) becoming a separate foneme > *ē₁. 
        Yet the frequency of this change differs among languages - Latvian and Latgalian have it more frequently while in Lithuanian and Samogitian it's slightly rarer.`,
  }),
  eastBalticOutro: new Translation({
    lt: 'Tuo tarpu priebalsių sistema išliko ta pati.',
    en: 'Meanwhile the consonant system remained the same.',
  }),
  personalisedChangeH2: new Translation({
    lt: 'Atskirų rytų baltų kalbų ir tarmių kaita',
    en: 'Developments of each Eastern Baltic language',
  }),
  toBeContinued: new Translation({
    lt: 'Laukite tęsinio...',
    en: 'To be continued',
  }),
  labials: new Translation({lt: 'Lūpiniai', en: 'Labials'}),
  coronals: new Translation({lt: 'Liežuvio priešakiniai', en: 'Coronals'}),
  dorsals: new Translation({lt: 'Gomuriniai', en: 'Dorsals'}),
  plosives: new Translation({lt: 'Sprogstamieji', en: 'Plosives'}),
  sibilants: new Translation({lt: 'Pučiamieji', en: 'Sibilants'}),
  sonorants: new Translation({lt: 'Pusbalsiai', en: 'Sonorants'}),
  commonConsonantsCaption: new Translation({
    lt: 'BBK priebalsiai',
    en: 'CB consonants',
  }),
  commonVowelsCaption: new Translation({lt: 'BBK balsiai', en: 'CB vowels'}),
  longEasternVowelsCaption: new Translation({
    lt: 'Ilgieji rytų baltų balsiai',
    en: 'Long EB vowels',
  }),
  shortEasternVowelsCaption: new Translation({
    lt: 'Trumpieji rytų baltų balsiai',
    en: 'Short EB vowels',
  }),
  longEasternDiphthongsCaption: new Translation({
    lt: 'Ilgieji rytų baltų dvigarsiai',
    en: 'Long EB diphthongs',
  }),
  shortEasternDiphthongsCaption: new Translation({
    lt: 'Trumpieji rytų baltų dvigarsiai',
    en: 'Short EB diphthongs',
  }),
}

export default translations