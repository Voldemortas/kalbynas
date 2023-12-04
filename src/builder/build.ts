import fs from 'node:fs'
import BunTranspiler from 'bunTranspiler'
import {
  apiOptions,
  reactOptions,
  reactTranspilerOptions,
  tsTranspilerOptions,
} from './config'
import less from 'less'
import streamToString from '~/utils/streamToText'

const OUT_DIR = import.meta.dir + '/../../out/'
const CLIENT_DIR = import.meta.dir + `/../client/`
const API_DIR = import.meta.dir + `/../server/api/`
const PAGES_DIR = import.meta.dir + `/../server/pages/`
const STATIC_DIR = import.meta.dir + `/../server/static/`

const cssTranspiler = {
  transpile: async (code: string) =>
    await `const css = new CSSStyleSheet();\ncss.replaceSync(\`${code.replaceAll(
      '`',
      '\\`'
    )}\`);\nexport default css`,
}
const jsonTranspiller = {
  transpile: async (code: string) =>
    await `export default ${code.replaceAll('`', '\\`')}`,
}

const reactTranspiler = new BunTranspiler(reactOptions, reactTranspilerOptions)
const reactTsTranspiler = new BunTranspiler(reactOptions, tsTranspilerOptions)
const tsTranspiler = new BunTranspiler(apiOptions, tsTranspilerOptions)
const lessTransipiler = {
  transpile: async (code: string) =>
    await cssTranspiler.transpile(
      (
        await less.render(code, {
          globalVars: {
            mobile: '(max-width: 799px)',
            desktop: '(min-width: 800px)',
          },
        })
      ).css
    ),
}

const isDev = Bun.argv.includes('--dev')
const isProd = Bun.argv.includes('--prod')

const version = new Date()
  .toISOString()
  .replace(/\.[\d]*Z$/, '')
  .replaceAll(/(:|-|T)/g, '')

if (!(isDev || isProd))
  console.error('Canno build: Missing either --dev or --prod flags')

if (isDev) build('dev')
if (isProd) build('prod')

async function build(folderName: string) {
  try {
    fs.mkdirSync(OUT_DIR)
  } catch (e) {
    if ((e as {code: string}).code !== 'EEXIST') {
      console.log(e)
      return
    }
  }
  fs.rmdirSync(OUT_DIR + folderName, {
    recursive: true,
    //@ts-ignore
    force: true,
  })
  fs.mkdirSync(OUT_DIR + folderName)
  try {
    await Bun.build({
      entrypoints: ['src/server/index.ts'],
      outdir: './out/' + folderName,
      splitting: true,
    })
  } catch (e) {
    console.error(e)
  }
  Bun.write(OUT_DIR + folderName + '/version.txt', version)
  fs.copyFileSync(
    import.meta.dir + `/index-${folderName}.html`,
    OUT_DIR + folderName + '/index.html'
  )
  fs.rmdirSync(OUT_DIR + folderName + '/assets', {
    recursive: true,
    //@ts-ignore
    force: true,
  })
  fs.cpSync(CLIENT_DIR + `assets`, OUT_DIR + folderName + '/assets', {
    recursive: true,
  })
  const files = readDirRecursively(CLIENT_DIR)
  for (const file of files) {
    if (/test/i.test(file)) {
      continue
    }
    transpileFile(file, CLIENT_DIR, '', /\.tsx$/i, '.js', reactTranspiler)
    transpileFile(file, CLIENT_DIR, '', /\.ts$/i, '.js', reactTsTranspiler)
    transpileFile(file, CLIENT_DIR, '', /\.less$/i, '.css')
    transpileFile(file, CLIENT_DIR, '', /\.less$/i, '.css.js', lessTransipiler)
    transpileFile(file, CLIENT_DIR, '', /\.json$/i, '.json.js', jsonTranspiller)
  }

  fs.rmdirSync(OUT_DIR + folderName + '/api', {
    recursive: true,
    //@ts-ignore
    force: true,
  })
  fs.mkdirSync(OUT_DIR + folderName + '/api')

  {
    const files = readDirRecursively(API_DIR)
    for (const file of files) {
      if (/test/i.test(file)) {
        continue
      }
      transpileFile(file, API_DIR, '/api', /\.ts$/i, '.js', tsTranspiler)
    }
  }
  {
    const files = readDirRecursively(PAGES_DIR)
    for (const file of files) {
      transpileFile(file, PAGES_DIR, '/pages', /\.xml$/i, '.xml')
    }
  }

  {
    fs.cpSync(STATIC_DIR, OUT_DIR + folderName, {
      recursive: true,
    })
  }

  async function transpileFile(
    file: string,
    directory: string,
    outDir: string,
    regex: RegExp,
    ending: string,
    transpiler: {transpile: (code: string) => Promise<string>} = {
      transpile: async (code: string) => await code,
    }
  ) {
    if (regex.test(file)) {
      const stream = await Bun.file(file).stream()
      const content = await streamToString(stream)
      const transpiledContent = await transpiler.transpile(content)
      const newFilePath = file.replace(directory, OUT_DIR + folderName + outDir)

      try {
        await Bun.write(newFilePath.replace(regex, ending), transpiledContent)
      } catch (e) {
        if ((e as {code: string}).code === 'ENOENT') {
          const folder = newFilePath.replace(
            new RegExp('([^]+)/([^]+)' + regex.source),
            '$1'
          )
          fs.mkdirSync(folder, {recursive: true})
          await Bun.write(newFilePath.replace(regex, ending), transpiledContent)
        } else {
          console.log(e)
          return
        }
      }
    }
  }
}

function readDirRecursively(path: string): string[] {
  const fileList = fs.readdirSync(path)
  let files: string[] = []

  for (const file of fileList) {
    const name = `${path}/${file}`
    if (fs.statSync(name).isDirectory()) {
      files = [...files, ...readDirRecursively(name)]
    } else {
      files.push(name)
    }
  }
  return files
}

