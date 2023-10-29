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

const reactTranspiler = new BunTranspiler(reactOptions, reactTranspilerOptions)
const reactTsTranspiler = new BunTranspiler(reactOptions, tsTranspilerOptions)
const tsTranspiler = new BunTranspiler(apiOptions, tsTranspilerOptions)
const lessTransipiler = {
  transpile: async (code: string) => (await less.render(code)).css,
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
  await Bun.build({
    entrypoints: ['src/server/index.ts'],
    outdir: './out/' + folderName,
    splitting: true,
  })
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
    transpileFile(file, CLIENT_DIR, '', /\.less$/i, '.css', lessTransipiler)
    transpileFile(file, CLIENT_DIR, '', /\.css$/i, '.css')
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

