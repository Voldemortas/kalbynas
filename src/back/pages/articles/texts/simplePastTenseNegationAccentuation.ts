import Article from '../Article'
import Translation from 'back/common/Translation'
import Lithuanian from './simplePastTenseNegation/Lithuanian'
import {renderToStaticMarkup} from 'react-dom/server'
import English from './simplePastTenseNegation/English.tsx'

export default new Article({
  title: new Translation({
    lt: 'Priešdėlinių būtojo kartinio laiko veiksmažodžių kirčiavimas',
    en: 'Accentuation of the prefixed simple past tense verbs',
  }),
  date: new Date('2025-06-28'),
  content: new Translation({
    lt: renderToStaticMarkup(Lithuanian()),
    en: renderToStaticMarkup(English()),
  }),
  id: new Translation('prefixed-verbs-accentuation-2'),
})
