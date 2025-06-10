import Translation, {type Translations} from 'back/common/Translation.ts'

const translations: Translations = {
  dialectology: new Translation({
    lt: 'Dialektologija',
    en: 'Dialectology',
  }),
  baltistics: new Translation({
    lt: 'Baltistika',
    en: 'Baltistics',
  }),
  articles: new Translation({
    lt: 'Straipsniai',
    en: 'Articles',
  }),
}

export default translations
