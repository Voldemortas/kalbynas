import * as sass from 'sass'
import {readdir} from 'node:fs/promises'

const TEMP_DIR = 'temp/'

export async function getAllModuleScssFiles(rootDit = TEMP_DIR) {
  return (await readdir(rootDit, {recursive: true})).filter((fileName) =>
    fileName.endsWith('.module.scss')
  )
}

export async function decorateModuleWithPrefix(moduleContent: string) {
  const regex = /(^(\.))|((^@media \([\s\w>=<\d]+\)\s{\n\s+)\.)/gm
  const compiledSource = await sass.compileStringAsync(moduleContent, {
    style: 'expanded',
  })
  const changedClassesToChildren = compiledSource.css.replaceAll(regex, '$4&_')
  return `
$uniqueId: unique-id();
/* #{$uniqueId} */

._#{$uniqueId} {
  ${changedClassesToChildren}
}`
}

export async function replaceModuleFileWithDecoratedContent(
  filePath: string,
  newFilePath?: string
): Promise<void> {
  const file = Bun.file(filePath)
  const writer = Bun.file(newFilePath ?? filePath).writer()
  const moduleContent = await file.text()
  const decoratedContent = await decorateModuleWithPrefix(moduleContent)
  writer.write(decoratedContent)
  await writer.flush()
}
