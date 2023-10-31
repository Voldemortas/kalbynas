import config from '../getConfig'

const {acceptedLanguages} = config

export default function getLocale(pathName = window.location.pathname) {
  return (
    acceptedLanguages.find((lang) =>
      new RegExp(`^/${lang}(/|$)`).test(pathName)
    ) ?? ''
  )
}

