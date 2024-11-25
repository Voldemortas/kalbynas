import type {Translations} from 'back/translations/Translation'

export default function getAllTranslated<T extends {[key: string]: string}>(
  translations: Translations,
  locale: string,
  params: Record<string, string[] | string | undefined> = {}
): T {
  return Object.keys(translations).reduce(
    (acc: {[key: string]: string}, cur) => {
      acc[cur] = translations[cur].format(locale, ...(params[cur] ?? []))
      return acc
    },
    {}
  ) as T
}
