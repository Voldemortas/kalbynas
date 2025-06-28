import Article from '../Article'
import Translation from 'back/common/Translation'
import Lithuanian from './presentTenseNegation/Lithuanian'
import {renderToStaticMarkup} from 'react-dom/server'
import English from 'back/pages/articles/texts/presentTenseNegation/English.tsx'

export default new Article({
  title: new Translation({
    lt: 'Priešdėlinių esamojo laiko veiksmažodžių kirčiavimas',
    en: 'Accentuation of the prefixed present tense verbs',
  }),
  date: new Date('2025-06-10'),
  content: new Translation({
    lt: renderToStaticMarkup(Lithuanian()),
    en: renderToStaticMarkup(English()),
  }),
  id: new Translation('prefixed-verbs-accentuation'),
})
