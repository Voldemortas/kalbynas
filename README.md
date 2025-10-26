# Kalbynas

[![test](https://github.com/Voldemortas/kalbynas/actions/workflows/test.yml/badge.svg)](https://github.com/Voldemortas/kalbynas/actions/workflows/test.yml)
![lines-coverage](https://img.shields.io/endpoint?url=https://kalbynas.lt/status/lines.json)
![functions-coverage](https://img.shields.io/endpoint?url=https://kalbynas.lt/status/functions.json)
![files-coverage](https://img.shields.io/endpoint?url=https://kalbynas.lt/status/files.json)

## Live project

Project living live can be accessed by visiting [kalbynas.lt](https://kalbynas.lt)

## Code tree

Define routes in `/src/pages.ts`  
Write react code in `/src/front/` (each route component is suggested to be in its own directory)  
Write backend code in `/src/back/`  
Add static content in `/src/static/`  
Various build related things reside in `/src/build`

## Predefined commands

`bun run build` - builds dev (by default) build  
`bun run build-prod` - builds production build (minifies and other stuff)  
`bun run watch` - builds dev build and serves code while actively watching for code changes - **not bug free**  
`bun run serve` - serves built code from `/out/back/server.js`  
`bun run serve-pm2` - serves built code from `/out/back/server.js` with `pm2` (`bun install pm2 -g` to install it
globally)

## Environment variables

Project port to serve can be set with `KALBYNAS_PORT`, otherwise `NODE_PORT` or the default (`3000`) ports will be used

## Caveats

~~[Css Modules](https://github.com/css-modules/css-modules) are not supported~~
hence [BEM](https://getbem.com/introduction/) is suggested. Having each react-route in a separate directory is highly
suggested for this reason.  
[Css Modules](https://github.com/css-modules/css-modules) are semi-supported now for `*.module.scss` files, to use them
follow this snippet:

```scss
.italic {
  font-style: italic;
}
```

```tsx
//MyComponent.tsx
import React from 'react'
import styles from 'myModule.module.scss'

export default function MyComponent() {
  return <div className={styles('italic')}>Hello world!</div>
}
```

Sass generated `$uniqueId` is required in order for custom css modules implementation to work.

~~_Pm2_ is not supported as it's not that friendly with a bun runtime.~~

Pm2 can be run by bun, so it works now, see `package.json` for a working example.

---

This project was originally created using [Voldemortas/bun-react-server](https://github.com/Voldemortas/bun-react-server) template, however, later it migrated to 
[Voldemortas/voldemortas-server](https://github.com/Voldemortas/voldemortas-server) which is based on the former 
version of this very project.