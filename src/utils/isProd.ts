export default function isProd() {
  return import.meta.dir.includes('out/prod')
}
