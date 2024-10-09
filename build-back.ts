export default async function buildBack() {
  const b = await Bun.build({
    entrypoints: ['src/back/server.ts'],
    outdir: 'out/back',
    target: 'bun',
    minify: Bun.env.NODE_ENV === 'production',
  })
  if (!b.success) {
    console.error(b.logs)
  }
}
