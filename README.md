# kalbynas

Requires [bun](https://bun.sh/)

To install dependencies:

```bash
bun install
```

Commands:

```bash
bun run build-dev # build project in dev mode
bun run build-prod # build project in prod mode
bun run build-all # build project in both modes
bun run serve-dev # serves project in dev mode (requires dev build)
bun run serve-prod # build project in prod mode (requires dev build)
bun run watch # builds and serves in dev mode while watching for file changes
```

_serve-dev_, _serve-build_, _watch_ accepts --port {number} for custom port:  
`bun watch --port 3008 # will run project in dev watch mode with :3008 port`

## live

Live code on https://kalbynas.lt

