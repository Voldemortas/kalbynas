import ItalicBlock from 'back/pages/common/components/ItalicBlock.tsx'
import {YtiVerbs} from './lists'
import {
  pastTenseEAcuteTable,
  pastTenseECircumflexTable,
  pastTenseEShortTable,
  pastTenseETable,
  pastTenseYtiAcuteTable,
  pastTenseYtiCircumflexTable,
  pastTenseYtiShortTable,
  pastTenseYtiTable,
  pastTenseOAcuteTable,
  pastTenseOCircumflexTable,
  pastTenseOShortTable,
  pastTenseOTable,
} from './tables'
import {arrayToDetailsType, Details} from './Details'

const E_CAPTION = 'grynieji -ė asmenuotės veiksmažodžiai'
const YTI_CAPTION = 'priesaginiai -ė asmenuotės veiksmažodžiai'
const O_CAPTION = '-o asmenuotės veiksmažodžiai'
const SHORT_CAPTION = 'su (istoriškai) trumpu balsiu'
const ACUTE_CAPTION = 'su tvirtapradžiu balsiu'
const CIRCUMFLEX_CAPTION = 'su tvirtagaliu balsiu'

function conjugationWithAVowel(conjugation: string) {
  return [SHORT_CAPTION, CIRCUMFLEX_CAPTION, ACUTE_CAPTION].map(
    (caption) => `${conjugation} ${caption}`
  )
}

const E_VERBS = arrayToDetailsType(
  [pastTenseEShortTable, pastTenseECircumflexTable, pastTenseEAcuteTable],
  conjugationWithAVowel(E_CAPTION)
)

const YTI_VERBS = arrayToDetailsType(
  [pastTenseYtiShortTable, pastTenseYtiCircumflexTable, pastTenseYtiAcuteTable],
  conjugationWithAVowel(YTI_CAPTION)
)

const O_VERBS = arrayToDetailsType(
  [pastTenseOShortTable, pastTenseOCircumflexTable, pastTenseOAcuteTable],
  conjugationWithAVowel(O_CAPTION)
)

export default function Lithuanian() {
  return (
    <>
      <p>
        Šis straipsnis tęsia <a href="/articles/0">praėjusio</a> straipsnio
        mintis apie neiginių (ir kitų priešdėlių) kirčiavimą.
      </p>
      <h2>Priklausomybė nuo bendraties</h2>
      <p>
        Esamojo laiko kirčiavimui įtakos teturi tik jis pats - t.y. žinant
        trečiąjį asmenį, beveik visada (nepaisant kelių išimčių), galima išvesti
        ir priešdėlinių veiksmažodžių kirčiavimą. Tačiau žinant tik būtąjį
        kartinį laiką, to padaryti negalima, mat kirčio (ne)šokinėjimą lemia ir
        priesagos (ne)buvimas bendratyje:
        <YtiVerbs />
        Pažvelkime į sudarytas lenteles.{' '}
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
        Pagal pateiktas lenteles galima pabandyti apibendrinti:
        <ul>
          <li>Tvirtapradės šaknys visados išlaiko kirtį šaknyje.</li>
          <li>
            <i>-o</i> amenuotė veikia taip pat, kaip ir esamąjame laike.
          </li>
          <li>
            <i>-ė</i> asmenuotės veiksmažodžiai, turintys priesagą -y- kituose
            laikuose yra kirčiuojami taip pat kaip ir {ItalicBlock('-o')}{' '}
            asmenuotė.
          </li>
          <li>
            Netvirtapradžiai grynieji <i>-ė</i> asmenuotės veiksmažodžiai visada
            permeta kirtį į priešdėlį.
          </li>
        </ul>
      </p>
      <h2>Nèkenčiu!</h2>
      <p>
        Nors Bendrinėje Lietuvių kalboje žodis <i>nekenčiu</i> yra kirčiuojamas
        kaip <i>nekenčiù</i>, tačiau mano tarmėje yra sakoma <i>nèkenčiu</i>.
        Tai yra todėl, kad būtasis kartinis laikas yra <i>nèkentė</i>. O toks
        veiksmažodis kaip <i>nedyla</i> yra kirčiuojamas kaip ir BK -{' '}
        <i>nedỹla</i>, mat būt. k. yra <i>nedìlo</i> - kita asmenuotė ir kirtis
        išliekantis šaknyje.
      </p>
    </>
  )
}
