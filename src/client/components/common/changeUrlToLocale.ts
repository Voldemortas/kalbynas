import config from '../getConfig'
import getLocale from './getLocale'

export default function changeUrlToLocale(
  language: string,
  pathName = window.location.pathname,
  {acceptedLanguages, defaultLanguage} = config
) {
  const currentLanguage = getLocale(pathName)
  if (
    (language || defaultLanguage) === (currentLanguage || defaultLanguage) ||
    !acceptedLanguages.includes(language)
  ) {
    return pathName + '#'
  }

  if (
    currentLanguage !== defaultLanguage &&
    language !== defaultLanguage &&
    currentLanguage !== ''
  ) {
    return pathName.replace(new RegExp(`^/${currentLanguage}`), `/${language}`)
  }

  if (currentLanguage === defaultLanguage || currentLanguage === '') {
    return pathName.replace(/^\//, `/${language}/`).replace(/\/$/, '')
  }

  return pathName
    .replace(new RegExp(`^/${currentLanguage}(/|$)`), '/$1')
    .replace('//', '/')
}

