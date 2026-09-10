import {feature} from 'bun:bundle'

const PROJECT_BASE_URL = !feature('CLIENT')
  ? (await import('src/commons/config')).PROJECT_BASE_URL
  : ''

class ReactPagesDictionary {
  private static instance: ReactPagesDictionary
  private pages: Map<string, string> = new Map<string, string>()
  private constructor() {}
  public static getInstance(): ReactPagesDictionary {
    if (!ReactPagesDictionary.instance) {
      ReactPagesDictionary.instance = new ReactPagesDictionary()
    }
    return ReactPagesDictionary.instance
  }

  public register(url: string, path: string) {
    if (this.pages.has(url)) {
      const link = (path: string) =>
        `\x1b]8;;file://${path}\x07${path}\x1b]8;;\x07`

      const registeredPath = this.pages.get(url)!

      const message =
        `Cannot register ${link(path)} for ${PROJECT_BASE_URL}${url}. ` +
        `It is already registered to ${link(registeredPath)}.`

      const error = new Error(message)
      error.stack = error.message
      throw error
    }

    this.pages.set(url, path)
  }

  public getUrls(): string[] {
    return [...this.pages.keys()]
  }
  public getPath(url: string): string | undefined {
    return this.pages.get(url)
  }
}
export default ReactPagesDictionary.getInstance()
