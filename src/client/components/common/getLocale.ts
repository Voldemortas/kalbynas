const ACCEPTED_LANGUAGES = {
  lt: [/^\/lt\/?/],
  en: [/^\/en\/?/],
}

export default function getLocale(pathName = window.location.pathname) {
  return (Object.entries(ACCEPTED_LANGUAGES).find(([language, regexArr]) =>
    regexArr.reduce((acc, cur) => acc || cur.test(pathName), false)
  ) ?? [''])[0]
}

