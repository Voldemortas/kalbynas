export default class Translation {
  private static DEFAULT_LOCALE = 'lt'
  private locales: string[]
  private readonly texts: Record<string, string>
  public constructor(texts: Record<string, string>) {
    this.locales = Object.keys(texts)
    if (this.locales.indexOf(Translation.DEFAULT_LOCALE) === -1) {
      throw new Error(
        `Translation is missing default=${Translation.DEFAULT_LOCALE} locale`
      )
    }
    this.texts = texts
  }

  public format(locale: string, ...params: string[]) {
    const loc =
      this.locales.indexOf(locale) === -1 ? Translation.DEFAULT_LOCALE : locale

    let answer = this.texts[loc]
    for (let i = 0; i < params.length; i++) {
      const pattern = new RegExp(`([\^\\\\␐]?)(\\\$${i})`, 'g')
      answer = answer.replaceAll(pattern, `$1${params[i]}`)
    }

    return answer
  }
}

export type Translations = Record<string, Translation>
