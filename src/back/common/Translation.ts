import {type ALTERNATES_TYPE, DEFAULT_ALTERNATE} from 'build/config.ts'

export default class Translation {
  private locales: ALTERNATES_TYPE[]
  private readonly texts: Record<string, string>
  public constructor(
    params: {[key in ALTERNATES_TYPE]?: string} | string | undefined
  ) {
    const texts =
      typeof params === 'string' || typeof params === 'undefined'
        ? {[DEFAULT_ALTERNATE]: params}
        : params
    this.locales = Object.keys(texts) as ALTERNATES_TYPE[]
    if (this.locales.indexOf(DEFAULT_ALTERNATE) === -1) {
      throw new Error(
        `Translation is missing default=${DEFAULT_ALTERNATE} locale`
      )
    }
    this.texts = texts
  }

  public format(locale = DEFAULT_ALTERNATE, ...params: string[]) {
    const loc =
      this.locales.indexOf(locale as ALTERNATES_TYPE) === -1
        ? DEFAULT_ALTERNATE
        : locale

    let answer = this.texts[loc]
    for (let i = 0; i < params.length; i++) {
      const pattern = new RegExp(`([\^\\\\␐]?)(\\\$${i})`, 'g')
      answer = answer.replaceAll(pattern, `$1${params[i]}`)
    }

    return answer
  }

  public static noTranslation() {
    return new Translation(undefined)
  }
}

export type Translations = Record<string, Translation>
