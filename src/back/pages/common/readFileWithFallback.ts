export default async function getFileWithFallbacks(...paths: string[]) {
  const files = paths.map((path) => Bun.file(path))
  for (const file of files) {
    if (await file.exists()) {
      return file
    }
  }
  return Promise.reject(
    `could not find file in list: ${JSON.stringify(paths, null, 2)}`
  )
}
