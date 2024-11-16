import type {Translations} from '../translations/Translation'

export default function getAllTranslated(
  translations: Translations,
  locale: string,
  params: Record<string, string[] | string | undefined> = {}
) {
  return Object.keys(translations).reduce(
    (acc, cur) => ({
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      ...acc,
      [cur]: translations[cur].format(locale, ...(params[cur] ?? [])),
    }),
    {}
  )
}
