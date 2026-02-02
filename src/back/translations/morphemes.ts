import Translation, {type Translations} from 'back/common/Translation.ts'

const translations: Translations = {
  h1: new Translation({
    lt: 'Kalbos dalių žymėjimas',
    en: 'Marking of morphemes',
  }),
  intro: new Translation({
    lt: `Šioje sveitainėje žodžių dalys gali būti atskiriamos 2 būdais: mokykliniu arba brūkšneliais. Taip pat žodžio
    dalių žymėjimą galima ir išjungti - taip sumažinant vaizdinį triukšmą. Naudokitės kairėje juostoje esančiu 
    išsiskleidžiančiu meniu, kad pakeistumėte žymėjimo būdą.`,
    en: `In this website morpheme boundaries may be separated in 2 ways: Lithuanian school or dashes. You may also 
    disable it in order to reduce the visual noise. Use the select menu in the left panel in order to change the way
    morphemes are marked.`,
  }),
  schoolH2: new Translation({
    lt: 'Mokyklinis žymėjimas',
    en: 'Lithuanian school marking',
  }),
  schoolParagraph: new Translation({
    lt: `Šis žymėjimas atitinka pradinėse klasėse naudojamą žymėjimą pasitelkiant įvairaus pobūdžio linijas. Nors ir
    žymėjimas yra sukurtas lietuvių kalbai, tačiau jis tinka ir kitoms baltų kalboms, nes žodžių daryba yra panaši.`,
    en: `This marking uses the method used in Lithuanian primary and high schools where different kind of morphemes get 
    marked using various lines and curves. Although the markers are meant for Lithuanian language, it can be used for 
    any Baltic language as morphological patterns are shared.`,
  }),
  schoolTableCaption: new Translation({
    lt: 'Mokyklinės žodžio dalių žymos',
    en: `Lithuanian school morpheme markers`,
  }),
  exampleH2: new Translation({
    lt: 'Pavyzdys',
    en: 'Live Example',
  }),
  exampleParagraph: new Translation({
    lt: 'Palyginkite du žodžius, vienas yra vienaskaitos vardininkas, o kitas – mažybinė vienaskaitos galininko forma:',
    en: 'Compare these two words for son, one is nominative singular and the other – diminutive accusative singular:',
  }),
  and: new Translation({
    lt: 'ir',
    en: 'and',
  }),
  name: new Translation({
    lt: 'Pavadinimas',
    en: 'Name',
  }),
  marker: new Translation({
    lt: 'Žyma',
    en: 'Marker',
  }),
  explanation: new Translation({
    lt: 'Paaiškinimas',
    en: 'Explanation',
  }),
  root: new Translation({
    lt: 'Šaknis',
    en: 'Root',
  }),
  rootExp: new Translation({
    lt: 'Pagrindinė morfema, pasikartojanti giminiškuose žodžiuose',
    en: 'Base morpheme from which related words are made',
  }),
  prefix: new Translation({
    lt: 'Priešdėlis',
    en: 'Prefix',
  }),
  prefixExp: new Translation({
    lt: 'Afiksas prieš šaknį',
    en: 'Affix placed before root',
  }),
  suffix: new Translation({
    lt: 'Priesaga',
    en: 'Suffix',
  }),
  suffixExp: new Translation({
    lt: 'Darybinis afiksas po šaknies',
    en: 'Derivational affix placed after root',
  }),
  flection: new Translation({
    lt: 'Galūnė',
    en: 'Flection',
  }),
  flectionExp: new Translation({
    lt: 'Kaitybinis afiksas, beveik visada žodžio gale',
    en: 'Flectional affix, almost always word finally',
  }),
  stem: new Translation({
    lt: 'Kamienas',
    en: 'Stem',
  }),
  stemExp: new Translation({
    lt: 'Visas žodis be galūnės',
    en: 'A group of everything but flectional affix',
  }),
  infix: new Translation({
    lt: 'Intarpas',
    en: 'Infix',
  }),
  infixExp: new Translation({
    lt: 'Dalelė įsiterpianti į kitas morfemas, kaip kad ki-to – ki⟨n⟩-ta',
    en: 'Infix inside another morpheme, such as nasal infix in present root',
  }),
  interfix: new Translation({
    lt: 'Jungiamasis balsis',
    en: 'Interfix',
  }),
  interfixExp: new Translation({
    lt: 'Balsis įterpiamas sudartiniuose žodžiuose',
    en: 'A vowel inserted between compound roots',
  }),
  reflexive: new Translation({
    lt: 'Sangrąžos dalelytė',
    en: 'Reflexive',
  }),
  reflexiveExp: new Translation({
    lt: 'Sangrąžos dalelytė',
    en: 'Reflexive clitic',
  }),
}

export default translations
