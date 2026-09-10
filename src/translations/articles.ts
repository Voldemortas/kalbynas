import Translation, {type Translations} from 'src/commons/Translation'

const translations: Translations = {
  text: new Translation({
    lt: 'Įvairaus pobūdžio straipsniai.',
    en: `Articles of various kind.`,
  }),
}

export const frontTranslations = {
  previous: new Translation({lt: 'Ankstesnis', en: 'Previous'}),
  next: new Translation({lt: 'Paskesnis', en: 'Next'}),
}

export default translations
