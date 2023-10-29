export default function getLocale(request: Request): string | null {
  const url = new URL(request.url)
  const locale = url.searchParams.get('locale')
  return locale
}

