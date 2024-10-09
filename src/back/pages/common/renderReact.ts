import htmlHeaders from '../../common/htmlHeaders'
import htmlTemplate from './default.html'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function renderReact(frontName: string, params: any) {
  const htmlFile = await Bun.file(`${import.meta.dir}/${htmlTemplate}`).text()

  const newHtmlFile = htmlFile
    .replaceAll(
      'const globalParams = undefined',
      `const globalParams = ${JSON.stringify(params)}`
    )
    .replaceAll(/placeholder/g, frontName.replace(/\.ts$/, ''))

  return new Response(newHtmlFile, htmlHeaders)
}
