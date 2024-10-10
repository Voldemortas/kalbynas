export default function getUrl(request: Request) {
  const url = new URL(request.url)
  const sub = url.hostname.split('.')[0]
  const pathname = url.pathname
  const href = url.href

  return {sub, pathname, href}
}