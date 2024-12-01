import Translation, {type Translations} from 'back/common/Translation.ts'

const translations: Translations = {
  title: new Translation({
    lt: 'kalbynas.lt - Pakalbėkim apie kalbą',
    en: "en.kalbynas.lt - Let's talk about language",
  }),
  description: new Translation({
    lt: 'Visokie su lietuvių kalba susiję dalykėliai',
    en: 'Various mostly Lithuanian language related things',
  }),
  keywords: new Translation({
    lt: 'Lingvistika, Lituanistika, Kalbotyra, Baltistika',
    en: 'Linguistics, Lithuanistics, Baltistics',
  }),
}

export default translations
