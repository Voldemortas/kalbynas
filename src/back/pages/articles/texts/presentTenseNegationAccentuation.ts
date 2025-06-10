import Article from '../Article'
import Translation from 'back/common/Translation'

export default new Article({
  title: new Translation({
    lt: 'Veiksmažodžio esamojo laiko neiginių kirčiavimas',
    en: 'Accentuation of the negated present tense verbs',
  }),
  date: new Date('2025-06-10'),
  content: new Translation({
    lt: 'Labas pasauli',
    en: 'Hello world!',
  }),
})
