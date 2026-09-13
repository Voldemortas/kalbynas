import Translation, {type Translations} from 'src/commons/Translation'

const translations: Translations = {
  h1: new Translation({
    lt: '404',
    en: '404',
  }),
  text: new Translation({
    lt: `Puslapis, kurio ieškote, nerastas!`,
    en: `The page you're looking for does not exist!`,
  }),
}

export default translations
