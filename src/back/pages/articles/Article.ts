import Translation, { type Translations } from 'back/common/Translation'

const DEFAULT_AUTHOR = new Translation({
  lt: 'Kalbyno autorius',
  en: 'Kalbynas Author',
})

export default class Article {
  public readonly title: Translation
  public readonly author: Translation
  public readonly content: Translation
  public readonly date: Translation
  public previousTitle: Translation
  public previousId: Translation
  public nextTitle: Translation
  public nextId: Translation
  public id: Translation
  constructor({
    title,
    content,
    author = DEFAULT_AUTHOR,
    date,
    id,
    previousTitle = Translation.noTranslation(),
    previousId = Translation.noTranslation(),
    nextTitle = Translation.noTranslation(),
    nextId = Translation.noTranslation(),
  }: {
    title: Translation
    content: Translation
    author?: Translation
    date: Date | string
    id: Translation
    previousTitle?: Translation
    previousId?: Translation
    nextTitle?: Translation
    nextId?: Translation
  }) {
    this.title = title
    this.author = author
    this.content = content
    const dateString = new Date(date).toISOString().split('T')[0]
    this.date = new Translation(dateString)
    this.previousTitle = previousTitle
    this.previousId = previousId
    this.nextTitle = nextTitle
    this.nextId = nextId
    this.id = id
  }

  public toTranslations(): Translations {
    return {
      title: this.title,
      content: this.content,
      author: this.author,
      date: this.date,
      id: this.id,
      nextTitle: this.nextTitle,
      nextId: this.nextId,
      previousTitle: this.previousTitle,
      previousId: this.previousId,
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
    const newArticle = new Article({ ...article, date: article.date.format() })
    if (this.list.length !== 0) {
      const previousArticle = this.list[this.list.length - 1]
      newArticle.previousTitle = previousArticle.title
      newArticle.previousId = previousArticle.id
      previousArticle.nextTitle = newArticle.title
      previousArticle.nextId = newArticle.id
    }
    this.list.push(newArticle)
  }
}
