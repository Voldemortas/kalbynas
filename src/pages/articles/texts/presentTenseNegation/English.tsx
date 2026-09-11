import ItalicBlock from 'src/commons/react/ItalicBlock'
import {alamarVerbs, eilmnr, eilmnrVerbs, galetiTuretiVerbs} from './utils'
import {PresentTables, PastTables} from './tables'
import ReactPageResolver from 'src/commons/ReactPageDictionary'
import {REACT_URL} from 'src/pages/articles/texts/presentTenseNegation/config'
import {ALTERNATES_TYPE} from 'src/commons/alternate'

const LOCALE: ALTERNATES_TYPE = 'en'

ReactPageResolver.register(REACT_URL, import.meta.path, {
  locales: LOCALE,
})

export default function English() {
  return (
    <>
      <div>
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
      </div>
      <h2>Prefixes</h2>
      <div>
        One shall note that almost all prefixes in my dialect work the same as
        they do in the Standard Lithuanian and the behave the same when it comes
        to stress replacement. Only the prefix {ItalicBlock('per-')} does not
        care about the stress movement as it's always stressed for being acute.
        In this article as the generic prefix the negation prefix{' '}
        {ItalicBlock('ne-')} will be used.
      </div>
      <h2>Present tense verbs</h2>
      <div>
        At first I thought it had something to do with the acute, however, it
        turns out it has to do with the (historically) short vowels as well.{' '}
        <i>Click on the arrow for detailed information.</i>
        <PresentTables locale={LOCALE} />
      </div>
      <div>
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
      </div>
      <div>
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
            {eilmnrVerbs('and so on')}
          </li>
          <li>
            <i>-(i) conjugation</i> conjugations carrying circumflex{' '}
            <i>al̃, am̃, ar̃</i> syllables and having the {ItalicBlock('-ė-')}{' '}
            suffix in other tenses also move the stress to the prefix:
            {alamarVerbs()}
          </li>
        </ul>
      </div>
      <h2>Nèkenčiu?</h2>
      <div>
        In the begining of the article it was mentioned that the verb{' '}
        <i>nekeñčia</i> is pronounced as <i>nèkenčia</i>. However, knowing only
        the present tense is not enough - the question persists why in my
        dialect the verbs <i>dỹla</i> and <i>keñčia</i> behave differently and
        become <i>nedỹla</i> and <i>nèkenčia</i>. Therefore other tense - the
        past simple had to be looked at as well.
      </div>
      <h2>Simple past tense verbs</h2>
      <div>
        The pretty much the same analysis was done for the simple past verbs as
        it was done for the present tense. Whilst doing it, it was noticed that
        seemingly the same conjugation verbs behave differently in both my
        dialect and the standard language : <i>žaĩdė - nèžaidė</i>, but{' '}
        <i>taĩsė - netaĩsė</i>. Thus testing with some other verbs the
        conclusion was made that {ItalicBlock('-ė')} conjugation verbs that have
        the suffix -y- in the infinitive (later in text <i>suffixed</i>) keep
        the stress in the root in all the cases.{' '}
        <i>Click on the arrow for detailed information.</i>
        <PastTables locale={LOCALE} />
      </div>
      <div>
        So once again, based on the tables we can summarise:
        <ul>
          <li>Acute stems always keep the stress on the root.</li>
          <li>
            <i>-o</i> conjugation works just like in the present tense.
          </li>
          <li>
            Suffixed <i>-ė</i> conjugation verbs are stressed as if they
            belonged to the {ItalicBlock('-o')} conjugation.
          </li>
          <li>
            Non-acute pure <i>-ė</i> conjugation verbs put the stress on the
            prefix for all the persons.
          </li>
        </ul>
      </div>
      <h2>Nèkenčiu!</h2>
      <div>
        The accentuation of <i>nèkenčiu</i> is made via analogy to{' '}
        <i>nèkentė</i>. While <i>nedyla</i> is accentuation like in the standard{' '}
        - <i>nedỹla</i>, as its past form is <i>nedìlo</i> - different
        cojungation and the stress is remaining within the root.
      </div>
    </>
  )
}
