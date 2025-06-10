import Translation, {type Translations} from 'back/common/Translation'

const DEFAULT_AUTHOR = new Translation({
  lt: 'Autorius',
  en: 'Author',
})

export default class Article {
  public readonly title: Translation
  public readonly author: Translation
  public readonly content: Translation
  public readonly date: Translation
  constructor({
    title,
    content,
    author = DEFAULT_AUTHOR,
    date,
  }: {
    title: Translation
    content: Translation
    author?: Translation
    date: Date
  }) {
    this.title = title
    this.author = author
    this.content = content
    const dateString = date.toISOString().split('T')[0]
    this.date = new Translation({lt: dateString, en: dateString})
  }

  public toTranslations(): Translations {
    return {
      title: this.title,
      content: this.content,
      author: this.author,
      date: this.date,
    }
  }
}
