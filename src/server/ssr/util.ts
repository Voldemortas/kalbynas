export function unicodeHtmlEntity(t: string) {
  var hex = t.charAt(2) === 'x'
  var base = hex ? 16 : 10
  var pos = hex ? 3 : 2
  var numericValue = parseInt(t.slice(pos, -1), base)
  return String.fromCharCode(numericValue)
}

export function replaceAllHtmlEntities(text: string) {
  return text.replaceAll(/(\&\#x[a-f0-9]+;)/g, (m) => unicodeHtmlEntity(m))
}

export function replaceAllObjectHtmlEntities(obj: {[key: string]: string}) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({...acc, [key]: replaceAllHtmlEntities(value)}),
    {}
  )
}
