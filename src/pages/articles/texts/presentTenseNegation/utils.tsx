import {articleTranslations} from 'src/translations/articles/presentTenseNegation'
import {ALTERNATES_TYPE} from 'src/commons/alternate'
import Translation from 'src/commons/Translation'

export const alamarVerbs = () => (
  <ol type="I">
    <li>kalbù, skambù, varvù - nèkalbu, nèskambu, nèvarvu </li>
    <li>kalbì, skambì, varvì - nèkalbi, nèskambi, nèvarvi </li>
    <li>kal̃ba, skam̃ba, var̃va - nèkalba, nèskamba, nèvarva </li>
  </ol>
)

export const eilmnrVerbs = (andSoOn: string) => (
  <ul>
    <li>brendù, breñda (bristi) - nèbrendu, nèbrenda</li>
    <li>renkù, reñka (rinkti) - nèrenku, nèrenka</li>
    {andSoOn}
  </ul>
)

export const galetiTuretiVerbs = () => (
  <ol type="I">
    <li>galiù, negaliù, turiù, neturiù</li>
    <li>galì, negalì, turì, neturì</li>
    <li>gãli, negãli tùri, netùri</li>
  </ol>
)

export const eilmnr = 'lmnr'
  .split('')
  .map((c) => `i${c}~e${c}`)
  .join(', ')

export function generateCaptions(
  locale: ALTERNATES_TYPE,
  conjugationCaption: Translation
): {
  summaryCaption: string
  shortCaption: string
  circumflexCaption: string
  acuteCaption: string
} {
  const {combinedCaption, shortCaption, circumflexCaption, acuteCaption} =
    articleTranslations

  return {
    summaryCaption: conjugationCaption.format(locale),
    shortCaption: combinedCaption.format(
      locale,
      conjugationCaption.format(locale),
      shortCaption.format(locale)
    ),
    circumflexCaption: articleTranslations.combinedCaption.format(
      locale,
      conjugationCaption.format(locale),
      circumflexCaption.format(locale)
    ),
    acuteCaption: articleTranslations.combinedCaption.format(
      locale,
      conjugationCaption.format(locale),
      acuteCaption.format(locale)
    ),
  }
}
