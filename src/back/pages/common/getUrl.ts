export default function getUrl(request: Request, strictHttp = false) {
  const url = new URL(request.url)
  const sub = url.hostname.split('.')[0]
  const pathname = url.pathname
  const href = url.href
  const origin = url.origin.replace(/(^http:)/, strictHttp ? 'https:' : '$1')

  return {sub, pathname, href, origin}
}
