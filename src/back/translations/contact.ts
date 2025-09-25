import Translation, { type Translations } from 'back/common/Translation.ts'

const translations: Translations = {
  h1: new Translation({
    lt: 'Susisiekite',
    en: 'Contact me',
  }),
  text: new Translation({
    lt: `Jeigu turite klausimų ar pasiūlymų, galite su manimi susiekti per <a href="$0">discord platformą</a> arba el. paštu <a href="mailto:$1">$1</a>`,
    en: `If you have questions or suggestions you may contact me via <a href="$0">discord</a> or email <a href="mailto:$1">$1</a>`,
  }),
}

export default translations
