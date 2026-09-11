import Translation, {type Translations} from 'src/commons/Translation'

export const articleTranslations: Translations = {
  aCaption: new Translation({
    lt: '-(i)a asmenuotės veiksmažodžiai',
    en: '-(i)a conjugation verbs',
  }),
  iCaption: new Translation({
    lt: '-i asmenuotės veiksmažodžiai',
    en: '-i conjugation verbs',
  }),
  oCaption: new Translation({
    lt: '-o asmenuotės veiksmažodžiai',
    en: '-o conjugation verbs',
  }),
  eCaption: new Translation({
    lt: 'Grynieji -ė asmenuotės veiksmažodžiai',
    en: 'Pure -ė conjugation verbs',
  }),
  ytiCaption: new Translation({
    lt: 'Priesaginiai -ė asmenuotės veiksmažodžiai',
    en: 'Suffixed -ė conjugation verbs',
  }),
  shortCaption: new Translation({
    lt: 'Su (istoriškai) trumpu balsiu',
    en: '(Historically) short',
  }),
  circumflexCaption: new Translation({
    lt: 'Su tvirtagaliu balsiu',
    en: 'Circumflex',
  }),
  acuteCaption: new Translation({
    lt: 'Su tvirtagaliu balsiu',
    en: 'Acute',
  }),
  combinedCaption: new Translation({
    lt: '$0 $1',
    en: '$1 $0',
  }),
}
