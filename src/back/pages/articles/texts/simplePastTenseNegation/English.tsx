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

const E_CAPTION = 'Pure -ė conjugation verbs'
const YTI_CAPTION = 'Suffixed -ė conjugation verbs'
const O_CAPTION = '-o conjugation verbs'
const SHORT_CAPTION = '(Historically) short'
const ACUTE_CAPTION = 'Acute'
const CIRCUMFLEX_CAPTION = 'Circumflex'

function conjugationWithAVowel(conjugation: string) {
  return [SHORT_CAPTION, CIRCUMFLEX_CAPTION, ACUTE_CAPTION].map(
    (caption) => `${caption} ${conjugation}`
  )
}

const E_VERBS = arrayToDetailsType(
  [pastTenseEShortTable, pastTenseECircumflexTable, pastTenseEAcuteTable],
  conjugationWithAVowel(E_CAPTION.toLowerCase())
)

const YTI_VERBS = arrayToDetailsType(
  [pastTenseYtiShortTable, pastTenseYtiCircumflexTable, pastTenseYtiAcuteTable],
  conjugationWithAVowel(YTI_CAPTION.toLowerCase())
)

const O_VERBS = arrayToDetailsType(
  [pastTenseOShortTable, pastTenseOCircumflexTable, pastTenseOAcuteTable],
  conjugationWithAVowel(O_CAPTION)
)

export default function English() {
  return (
    <>
      <p>
        This article is continuing the ideas of{' '}
        <a href="/articles/0">the previous</a> article regarding stressing
        prefixed verbs.
      </p>
      <h2>Dependency on the infinitive</h2>
      <p>
        The present tense is pretty straightforward, with a very few exceptions
        you can totally rely on the 3rd person present. However, the situation
        for the simple past one must know the infinitive form as well as the
        stress movement is dependant on the presence/lack of the suffix in the
        infinitive:
        <YtiVerbs />
        Let's take a look at the compiled tables.{' '}
        <i>Click on the arrow for detailed information.</i>
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
        Based on the tables we can summarise:
        <ul>
          <li>Acute stems always keep the stress on the root.</li>
          <li>
            <i>-o</i> conjugation works just like in the present tense.
          </li>
          <li>
            Suffixed <i>-ė</i> conjugation verbs asmenuotės veiksmažodžiai are
            stressed as if they belonged to the {ItalicBlock('-o')} conjugation.
          </li>
          <li>
            Non-acute pure <i>-ė</i> conjugation verbs put the stress on the
            prefix for all the persons.
          </li>
        </ul>
      </p>
      <h2>Nèkenčiu!</h2>
      <p>
        Although in the standard language the word <i>nekenčiu</i> is stressed
        as <i>nekenčiù</i>, however, in my dialect we say <i>nèkenčiu</i>. This
        is because in the simple past we have <i>nèkentė</i>. On the other hand
        such verb like <i>nedyla</i> is stressed like in the Standard -{' '}
        <i>nedỹla</i>, as its past is <i>nedìlo</i> - different conjugation and
        the stress is on the ending.
      </p>
    </>
  )
}
