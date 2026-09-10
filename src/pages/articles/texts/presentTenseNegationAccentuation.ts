import Article from '../Article'
import Lithuanian from './presentTenseNegation/Lithuanian'
import English from './presentTenseNegation/English'
import {renderToStaticMarkup} from 'react-dom/server'
import Translation from 'src/commons/Translation'

export default new Article({
  title: new Translation({
    lt: 'Priešdėlinių veiksmažodžių kirčiavimas',
    en: 'Accentuation of Prefixed Verbs',
  }),
  date: new Date('2025-06-29'),
  content: new Translation({
    lt: renderToStaticMarkup(Lithuanian()),
    en: renderToStaticMarkup(English()),
  }),
  id: new Translation('prefixed-verbs-accentuation'),
})
