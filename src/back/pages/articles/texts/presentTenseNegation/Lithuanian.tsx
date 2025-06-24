import ItalicBlock from 'back/pages/common/components/ItalicBlock.tsx'
import {alamarVerbs, eilmnr, eilmnrVerbs, galetiTuretiVerbs} from './lists'
import {
  presentTenseAAcuteTable,
  presentTenseACircumflexTable,
  presentTenseAShortTable,
  presentTenseATable,
  presentTenseIAcuteTable,
  presentTenseICircumflexTable,
  presentTenseIShortTable,
  presentTenseITable,
  presentTenseOAcuteTable,
  presentTenseOCircumflexTable,
  presentTenseOShortTable,
  presentTenseOTable,
} from './tables'
import {arrayToDetailsType, Details} from './Details'

const A_CAPTION = '-(i)a asmenuotės veiksmažodžiai'
const I_CAPTION = '-i asmenuotės veiksmažodžiai'
const O_CAPTION = '-o asmenuotės veiksmažodžiai'
const SHORT_CAPTION = 'su (istoriškai) trumpu balsiu'
const ACUTE_CAPTION = 'su tvirtapradžiu balsiu'
const CIRCUMFLEX_CAPTION = 'su tvirtagaliu balsiu'

function conjugationWithAVowel(conjugation: string) {
  return [SHORT_CAPTION, CIRCUMFLEX_CAPTION, ACUTE_CAPTION].map(
    (caption) => `${conjugation} ${caption}`
  )
}

const A_VERBS = arrayToDetailsType(
  [
    presentTenseAShortTable,
    presentTenseACircumflexTable,
    presentTenseAAcuteTable,
  ],
  conjugationWithAVowel(A_CAPTION)
)

const I_VERBS = arrayToDetailsType(
  [
    presentTenseIShortTable,
    presentTenseICircumflexTable,
    presentTenseIAcuteTable,
  ],
  conjugationWithAVowel(I_CAPTION)
)

const O_VERBS = arrayToDetailsType(
  [
    presentTenseOShortTable,
    presentTenseOCircumflexTable,
    presentTenseOAcuteTable,
  ],
  conjugationWithAVowel(O_CAPTION)
)

export default function Lithuanian() {
  return (
    <>
      <p>
        Viskas prasidėjo nuo mano „neteisingo“ žodžio <i>nekenčiu</i>{' '}
        sukirčiavimo - aš mokydamas kitakalbius lietuvių kalbos pasakiau, kad
        žodis yra <i>nèkenčiu</i>, bet dėl viso pikto pasitikrinau su{' '}
        <a href="https://kalbu.vdu.lt/mokymosi-priemones/kirciuoklis/">
          kirčiuokliu
        </a>{' '}
        ir sužinojau, kad BK kirčiuojasi <i>nekenčiù</i>. Pasinaudojus paieškos
        varikliais paaiškėjo, kad toks mano kirčiavimas yra užfiksuotas kaip{' '}
        <a href="https://portalcris.vdu.lt/server/api/core/bitstreams/d192d095-951c-4b5c-9981-996e24e8223d/content">
          dažnas neteisingas kirčiavmas jaunimo dainose
        </a>
        . Tad ėmiausi šiokio tokio tyrumuko.
      </p>
      <p>
        Pradžioje galvojau, kad tai susiję su tvirtaprade priegaide, tačiau
        pasirodo tai susiję ir su (istoriniu) šaknies balsio ilgiu.{' '}
        <i>
          Spustelėkite rodykles/trikampius norėdami pasiekti daugiau
          informacijos.
        </i>
        {Details({
          summary: {element: presentTenseATable, caption: A_CAPTION},
          rest: A_VERBS,
        })}
        {Details({
          summary: {element: presentTenseITable, caption: I_CAPTION},
          rest: I_VERBS,
        })}
        {Details({
          summary: {element: presentTenseOTable, caption: O_CAPTION},
          rest: O_VERBS,
        })}
      </p>
      <p>
        Pagal pateiktas lenteles galima pabandyti apibendrinti:
        <ul>
          <li>Tvirtapradės šaknys visados išlaiko kirtį šaknyje.</li>
          <li>
            <i>-o</i> asmenuočių veiksmažodžiai neturi kirčio šokinėjimo į
            priešdėlį ir kirtis iš šaknies peršoka į galūnę netvirtapradėse
            šaknyse I ir II asmenyse.
          </li>
          <li>
            <i>-(i)a</i> ir <i>-i</i> asmenuočių neakūtiniai veiksmažodžiai
            patiria tokį patį šokinėjimą, kaip ir {ItalicBlock('-o')} asmenuotės
            veiksmažodžiai, tačiau šaknyse su (istoriškai) trumpu balsiu kirtis
            peršoka į priešdėlį {ItalicBlock('ne-')} visuose asmenyse.
          </li>
        </ul>
      </p>
      <p>
        <h2>Išimtys</h2>
        Besitestuodamas įvairius veiksmažodžius užtikau trijų tipų išimtis:
        <ul>
          <li>
            Veiksmažodžiai <i>galėti</i> ir <i>turėti</i> nepaklūsta{' '}
            <i>trumpojo balsio -(i)</i> paradigmai ir yra atitinkamai
            kirčiuojami:
            {galetiTuretiVerbs()}
          </li>
          <li>
            Veiksmažodžiai, kurie skirtingose formose turi besikaitaliojančias
            tvirtagales <i>{eilmnr}</i> ir <i>i~en</i> poras permeta kirtį ant
            priešdėlio:
            {eilmnrVerbs()}
          </li>
          <li>
            <i>-(i) asmenuotės</i> veiksmažodžiai, turintys tvirtagalius{' '}
            <i>al̃, am̃, ar̃</i> skiemenis bei turintys priesagą{' '}
            {ItalicBlock('-ė-')} kituose laikuose, taip pat permeta kirtį ant
            priešdėlio:
            {alamarVerbs()}
          </li>
        </ul>
      </p>
      <p>
        <h2>Priešdėliai</h2>
        <p>
          Vietoje priešdėlio {ItalicBlock('ne-')} pabandžius kitus priešdėlis,
          pasimatė jog visi, išskyrus {ItalicBlock('pér-')}, kuris esti
          tvirtapradis ir yra visada kirčiuotas, elgiasi taip pat kaip ir
          priešdėlis {ItalicBlock('ne-')}.
        </p>
      </p>
      <p>
        <h2>Nèkenčiu?</h2>
        <p>
          Straipsnio pradžioje buvo paminėta, jog mano tarmėje vietoje{' '}
          <i>nekeñčia</i> yra tariama <i>nèkenčia</i>. Visa tai yra nulemta
          būtojo kartinio laiko! Ir apie jo kirčiavimą bus galima perskaityti{' '}
          <i>sekančiame</i> straipsnyje greitu metu.
        </p>
      </p>
    </>
  )
}
