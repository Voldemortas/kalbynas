import Article from 'src/pages/articles/Article'
import './presentTenseNegation/Lithuanian'
import './presentTenseNegation/English'
import Translation from 'src/commons/Translation'
import {
  PAGE_URL,
  REACT_URL,
} from 'src/pages/articles/texts/presentTenseNegation/config'

export default new Article({
  title: new Translation({
    lt: 'Priešdėlinių veiksmažodžių kirčiavimas',
    en: 'Accentuation of Prefixed Verbs',
  }),
  date: new Date('2025-06-29'),
  content: new Translation(REACT_URL),
  id: new Translation(PAGE_URL),
})
