import {feature} from 'bun:bundle'
import {ALTERNATES, ALTERNATES_TYPE} from 'src/commons/alternate'

const PROJECT_BASE_URL = !feature('CLIENT')
  ? (await import('src/commons/config')).PROJECT_BASE_URL
  : ''

class ReactPagesDictionary {
  private static instance: ReactPagesDictionary
  private pages: Map<
    string,
    Record<ALTERNATES_TYPE, {path: string; client: boolean}>
  > = new Map<
    string,
    Record<ALTERNATES_TYPE, {path: string; client: boolean}>
  >()
  private constructor() {}
  public static getInstance(): ReactPagesDictionary {
    if (!ReactPagesDictionary.instance) {
      ReactPagesDictionary.instance = new ReactPagesDictionary()
    }
    return ReactPagesDictionary.instance
  }

  public register(
    url: string,
    path: string,
    {
      locales = ALTERNATES,
      client = true,
    }: {
      locales?: ALTERNATES_TYPE | readonly ALTERNATES_TYPE[]
      client?: boolean
    } = {}
  ) {
    const localesArray = typeof locales === 'string' ? [locales] : locales
    if (
      this.pages.has(url) &&
      localesArray.some(
        (locale) =>
          this.pages.get(url)![locale as ALTERNATES_TYPE] !== undefined
      )
    ) {
      const link = (path: string) =>
        `\x1b]8;;file://${path}\x07${path}\x1b]8;;\x07`

      const message = `Cannot register ${link(path)} for ${PROJECT_BASE_URL}${url}[${locales}].`

      const error = new Error(message)
      error.stack = error.message
      throw error
    }

    this.pages.set(url, {
      ...(this.pages.get(url) ?? {}),
      ...(Object.fromEntries(
        localesArray.map((locale) => [locale, {path, client}])
      ) as Record<ALTERNATES_TYPE, {path: string; client: boolean}>),
    })
  }

  public getUrls(): string[] {
    return [...this.pages.keys()]
  }
  public getPath(
    url: string
  ): Record<ALTERNATES_TYPE, {path: string; client: boolean}> | undefined {
    return this.pages.get(url)
  }
}
export default ReactPagesDictionary.getInstance()
