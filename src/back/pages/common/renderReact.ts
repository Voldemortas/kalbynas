import htmlHeaders from '../../common/htmlHeaders'
import htmlTemplate from './default.html'
import {type ReactType, type PageType, getPage} from '../../../pages'

export default async function renderReact(request: Request) {
  const htmlFile = await Bun.file(`${import.meta.dir}/${htmlTemplate}`).text()
  const page = getPage(request, 'react') as PageType<ReactType>

  const newHtmlFile = htmlFile
    .replaceAll(
      'const globalParams = undefined',
      `const globalParams = ${JSON.stringify(page.resolve.resolver(request, page.params))}`
    )
    .replaceAll(/placeholder/g, page.resolve.path.replace(/\.ts$/, ''))

  return new Response(newHtmlFile, htmlHeaders)
}
