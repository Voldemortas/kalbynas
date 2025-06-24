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

const A_CAPTION = '-(i)a conjugation verbs'
const I_CAPTION = '-i conjugation verbs'
const O_CAPTION = '-o conjugation verbs'
const SHORT_CAPTION = '(Historically) short'
const ACUTE_CAPTION = 'Acute'
const CIRCUMFLEX_CAPTION = 'Circumflex'

function conjugationWithAVowel(conjugation: string) {
  return [SHORT_CAPTION, CIRCUMFLEX_CAPTION, ACUTE_CAPTION].map(
    (caption) => `${caption} ${conjugation}`
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

export default function English() {
  return (
    <>
      <p>
        Everything started upon me stressing the word <i>nekenčiu</i> (I hate){' '}
        "incorrectly" - I was teaching foreigners and told the guys that the
        word was sressed as <i>nèkenčiu</i>, however, just to be sure I checked
        it with an{' '}
        <a href="https://kalbu.vdu.lt/mokymosi-priemones/kirciuoklis/">
          accentuation tool
        </a>{' '}
        and found out that the word is stressed <i>nekenčiù</i>. So I used some
        search engines to find out that such accentuation is found in{' '}
        <a href="https://portalcris.vdu.lt/server/api/core/bitstreams/d192d095-951c-4b5c-9981-996e24e8223d/content">
          common accentuation mistakes in the popular youth songs
        </a>
        . Thus I started some investigation.
      </p>
      <p>
        At first I thought it had something to do with the acute, however, it
        turns out it has to do with the (historically) short vowels too.{' '}
        <i>Click on the arrow for detailed information.</i>
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
        Based on the tables we can summarise:
        <ul>
          <li>Acute stems always keep the stress on the root.</li>
          <li>
            <i>-o</i> conjugation verbs don't move the stress on prefixes and
            the stress is moving onto flectional endings in non-acute stems for
            the 1st and 2nd singular.
          </li>
          <li>
            <i>-(i)a</i> ir <i>-i</i> conjugation non-acute verbs have the same
            stress movement as the {ItalicBlock('-o')} conjugation verbs,
            however, stems with the (historically) short vowels get the stress
            moved onto the prefix {ItalicBlock('ne-')} for all the persons.
          </li>
        </ul>
      </p>
      <p>
        <h2>Exceptions</h2>
        After testing various verbs there were 3 kind of exceptions found:
        <ul>
          <li>
            Verbs <i>galėti</i> (be able to/can) and <i>turėti</i> (to have) do
            not follow the <i>short vowel -(i)</i> paradigm and are accentuated
            as:
            {galetiTuretiVerbs()}
          </li>
          <li>
            Verbs that in different forms have circumflex <i>{eilmnr}</i> and{' '}
            <i>i~en</i> pairs put the stress on the prefix:
            {eilmnrVerbs()}
          </li>
          <li>
            <i>-(i) conjugation</i> conjugations carrying circumflex{' '}
            <i>al̃, am̃, ar̃</i> syllables and having the {ItalicBlock('-ė-')}{' '}
            suffix in other tenses also move the stress to the prefix:
            {alamarVerbs()}
          </li>
        </ul>
      </p>
      <p>
        <h2>Prefixes</h2>
        <p>
          Testing other prefixes besides the aforementioned {ItalicBlock('ne-')}{' '}
          showed that every other prefix but {ItalicBlock('pér-')}, which is
          acute and thus always carrying the stress, act like the prefix{' '}
          {ItalicBlock('ne-')}.
        </p>
      </p>
      <p>
        <h2>Nèkenčiu?</h2>
        <p>
          In the begining of the article it was said that in my dialect it's not{' '}
          <i>nekeñčia</i> but <i>nèkenčia</i>. All of this is influenced by the
          simple past tense. More about that shall be available soon in the next
          article soon.
        </p>
      </p>
    </>
  )
}
