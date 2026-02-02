import Translation from 'back/common/Translation.ts'

const NavTranslations = {
  theme: new Translation({lt: 'Tema', en: 'Theme'}),
  OS: new Translation({lt: 'OS'}),
  dark: new Translation({lt: 'tamsi', en: 'dark'}),
  light: new Translation({lt: 'šviesi', en: 'light'}),
  morphology: new Translation({
    lt: 'Žodžio dalių žymos',
    en: 'Morpheme marker',
  }),
  school: new Translation({lt: 'mokyklinės', en: 'Lithuanian school'}),
  dashes: new Translation({lt: 'brūkšneliai', en: 'dashes'}),
  disabled: new Translation({lt: 'jokių', en: 'disabled'}),
}

export default NavTranslations
