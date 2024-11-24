import {$} from 'bun'
import * as sass from 'sass'
import {readdir} from 'node:fs/promises'
import isProd from './src/back/pages/common/isProd.ts'

const TEMP_DIR = 'temp/'

export default async function buildFront(entrypoints: string[]) {
  await $`cp src/front ${TEMP_DIR} -r`

  try {
    const scssVariablePattern = /^\/\*\s(\w+)\s\*\/\n/g
    const isMatchingScss = (name: string) => /\.scss$/.test(name)
    const isMatchingTsx = (name: string) => /\.tsx$/.test(name)

    const scssFiles = (await readdir(TEMP_DIR, {recursive: true})).filter(
      isMatchingScss
    )
    const tsxFiles = (await readdir(TEMP_DIR, {recursive: true})).filter(
      isMatchingTsx
    )

    await Promise.all(
      scssFiles.map(async (f) => {
        const {css} = await sass.compileAsync(`${TEMP_DIR}${f}`)
        await Bun.write(`${TEMP_DIR}${f.replace(/\.scss$/, '.css')}`, css)
        if (/\.module\.scss$/.test(f) && scssVariablePattern.test(css)) {
          await Bun.write(
            `${TEMP_DIR}${f.replace(/\.scss$/, '.js')}`,
            generateJS(css.split('\n')[0].replace('/* ', '').replace(' */', ''))
          )
        }
      })
    )

    await Promise.all(
      tsxFiles.map(async (f) => {
        const tsxFile = Bun.file(`./${TEMP_DIR}${f}`)
        await Bun.write(
          tsxFile,
          (await tsxFile.text()).replace(
            /import (\w+) from (['"])([.\w\/\-_]+)\.module\.s?css\2/g,
            'import $2$3.module.css$2\nimport $1 from $2$3.module.js$2\n'
          )
        )
      })
    )

    const buildOutput = await Bun.build({
      entrypoints: entrypoints.map((e) => e.replace(/^front/, TEMP_DIR)),
      outdir: 'out/front',
      experimentalCss: true,
      minify: isProd,
      root: TEMP_DIR,
    })
    if (!buildOutput.success) {
      console.error(buildOutput.logs)
    }
  } catch (e) {
    console.error(e)
    return 1
  }

  await $`rm -rf temp/`
}

function generateJS(hash: string) {
  return `export default function styles(className) {
    const hash = '_${hash}_'
    return hash + className
  }`
}
