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
  public previous: Translation
  public next: Translation
  public id: number | undefined
  constructor({
    title,
    content,
    author = DEFAULT_AUTHOR,
    date,
    id,
    previous = Translation.noTranslation(),
    next = Translation.noTranslation(),
  }: {
    title: Translation
    content: Translation
    author?: Translation
    date: Date | string
    id?: number
    previous?: Translation
    next?: Translation
  }) {
    this.title = title
    this.author = author
    this.content = content
    const dateString = new Date(date).toISOString().split('T')[0]
    this.date = new Translation(dateString)
    this.previous = previous
    this.next = next
    this.id = id
  }

  public toTranslations(): Translations {
    return {
      title: this.title,
      content: this.content,
      author: this.author,
      date: this.date,
      id: new Translation(this.id + ''),
      next: this.next,
      previous: this.previous,
    }
  }
}

export class ArticleList {
  public readonly list: Article[]
  public constructor(articles: Article[] = []) {
    this.list = []
    articles.forEach((art) => this.addArticle(art))
  }
  public addArticle(article: Article) {
    const newArticle = new Article({...article, date: article.date.format()})
    if (newArticle.id === undefined) {
      newArticle.id = this.list.length
    }
    if (this.list.length !== 0) {
      const previousArticle = this.list[this.list.length - 1]
      newArticle.previous = previousArticle.title
      previousArticle.next = newArticle.title
    }
    this.list.push(newArticle)
  }
}
