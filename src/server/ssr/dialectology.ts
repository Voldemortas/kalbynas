import {replaceAllObjectHtmlEntities} from './util'

export default function dialectology({locale}: {locale: string}) {
  const answers: {
    lt: DialectologyPageType
    en: DialectologyPageType
  } = {
    lt: {
      text: 'Šiame puslapyje bus kalbama apie Lietuvių kalbos tarmes ir susijusius dalykus.',
    },
    en: {
      text: `In this page the we'll talk about Lithuanian dialectolog and related things`,
    },
  }

  return replaceAllObjectHtmlEntities(answers[locale as 'lt'] ?? answers.lt)
}

export type DialectologyPageType = {
  text: string
}

