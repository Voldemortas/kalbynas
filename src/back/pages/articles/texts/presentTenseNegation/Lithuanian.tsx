import ItalicBlock from 'back/pages/common/components/ItalicBlock.tsx'
import {alamarVerbs, eilmnr, eilmnrVerbs, galetiTuretiVerbs} from './lists'
import {
  pastTenseEAcuteTable,
  pastTenseECircumflexTable,
  pastTenseEShortTable,
  pastTenseYtiAcuteTable,
  pastTenseYtiCircumflexTable,
  pastTenseYtiShortTable,
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
  pastTenseETable,
  pastTenseOTable,
  pastTenseYtiTable,
} from './tables'
import {arrayToDetailsType, Details} from './Details'

const A_CAPTION = '-(i)a asmenuotės veiksmažodžiai'
const I_CAPTION = '-i asmenuotės veiksmažodžiai'
const O_CAPTION = '-o asmenuotės veiksmažodžiai'
const E_CAPTION = 'grynieji -ė asmenuotės veiksmažodžiai'
const YTI_CAPTION = 'priesaginiai -ė asmenuotės veiksmažodžiai'
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

const E_VERBS = arrayToDetailsType(
  [pastTenseEShortTable, pastTenseECircumflexTable, pastTenseEAcuteTable],
  conjugationWithAVowel(E_CAPTION)
)

const YTI_VERBS = arrayToDetailsType(
  [pastTenseYtiShortTable, pastTenseYtiCircumflexTable, pastTenseYtiAcuteTable],
  conjugationWithAVowel(YTI_CAPTION)
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
      <h2>Priešdėliai</h2>
      <p>
        Pradžiai reikėtų paminėti jog beveik visi priešdėliai, tiek mano
        tarmėje, tiek BK veikia taip pat - vienintelė išimtis yra priešdėlis{' '}
        {ItalicBlock('per-')}, kuris bet kuriuo atveju yra kirčiuotas, nes yra
        tvirtapradis. Šiame straipsnyje kaip generinis priešdėlis bus vartojamas
        neiginio priešdėlis {ItalicBlock('ne-')}.
      </p>
      <h2>Esamojo laiko veiksmažodžiai</h2>
      <p>
        Iš pradžių galvojau, kad kirčio šokinėjimas yra susijęs su tvirtaprade
        priegaide, tačiau pasirodo tai susiję ir su (istoriniu) šaknies balsio
        ilgiu.{' '}
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
      <h2>Nèkenčiu?</h2>
      <p>
        Straipsnio pradžioje buvo paminėta, jog mano tarmėje vietoje{' '}
        <i>nekeñčia</i> yra tariama <i>nèkenčia</i>. Tačiau vien esamojo laiko
        analizės neužtenka - ji neatsako, kodėl mano tarmėje veiksmažodžiai{' '}
        <i>dỹla</i> ir <i>keñčia</i> elgiasi skirtingai ir yra <i>nedỹla</i> bei{' '}
        <i>nèkeñčia</i>. Todėl buvo pažvelgta ir į kitą laiką - būtąjį kartinį.
      </p>
      <h2>Būtojo kartinio laiko veiksmažodžiai</h2>
      <p>
        Iš esmės vėlgi buvo padaryti panaši analizė, kaip ir esamajam laikui. Ją
        bedarant buvo pastebėta, jog čia jau ne tik mano tarmėje, bet ir BK
        skirtingi veiksmažodžiai, kurie iš pirmo žvilgsnio priklauso tai pačiai
        asmenuotei, elgiasi skirtingai: <i>žaĩdė - nèžaidė</i>, bet{' '}
        <i>taĩsė - netaĩsė</i>. Tad išsibandžius įvairius veiksmažodžius buvo
        prieita išvados, kad tai yra nulemta ir bendraties - {ItalicBlock('-ė')}{' '}
        asmenuotės veiksmažodžiai, kurie bendratyje turi priesagą -y- (tekste
        toliau <i>priesaginiai</i>) išlaiko kirtį šaknyje bet kuriuo atveju.{' '}
        <i>
          Spustelėkite rodykles/trikampius norėdami pasiekti daugiau
          informacijos.
        </i>
        {Details({
          summary: {element: pastTenseETable, caption: E_CAPTION},
          rest: E_VERBS,
        })}
        {Details({
          summary: {element: pastTenseYtiTable, caption: YTI_CAPTION},
          rest: YTI_VERBS,
        })}
        {Details({
          summary: {element: pastTenseOTable, caption: O_CAPTION},
          rest: O_VERBS,
        })}
      </p>
      <p>
        Taigi, vėl pagal pateiktas lenteles galima pabandyti apibendrinti:
        <ul>
          <li>Tvirtapradės šaknys visados išlaiko kirtį šaknyje.</li>
          <li>
            <i>-o</i> asmenuočių veiksmažodžiai elgiasi taip pat, kaip ir
            esamojo laiko {ItalicBlock('o-')} asmenuotės veiksmažodžiai.
          </li>
          <li>
            Priesaginiai <i>-ė</i> asmenuotės veiksmažodžiai yra kirčiuojami
            taip pat kaip ir {ItalicBlock('-o')} asmenuotė.
          </li>
          <li>
            Netvirtapradžiai grynieji <i>-ė</i> asmenuotės veiksmažodžiai visada
            permeta kirtį į priešdėlį.
          </li>
        </ul>
      </p>
      <h2>Nèkenčiu!</h2>
      <p>
        Taigi, toks kirčiavimas kaip <i>nèkenčiu</i> yra nulemtas būt. k. l.
        pagal analogiją žodžiui <i>nèkentė</i>. O <i>nedyla</i> yra kirčiuojamas
        kaip ir BK - <i>nedỹla</i>, mat būt. k. yra <i>nedìlo</i> - kita
        asmenuotė ir kirtis išliekantis šaknyje.
      </p>
    </>
  )
}
