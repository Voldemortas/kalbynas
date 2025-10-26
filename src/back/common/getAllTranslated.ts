import type {Translations} from 'back/common/Translation.ts'
import type {ALTERNATES_TYPE} from 'build/config.ts'

export default function getAllTranslated(
  translations: Translations,
  locale: ALTERNATES_TYPE,
  params: Record<string, string[] | string | undefined> = {}
): {[key: string]: string} {
  return Object.keys(translations).reduce(
    (acc: {[key: string]: string}, cur) => {
      acc[cur] = translations[cur].format(locale, ...(params[cur] ?? []))
      return acc
    },
    {}
  ) as {[key: string]: string}
}
