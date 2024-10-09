# bun-react-server

## Instalation

move to desired (new) directory:
```
git clone https://github.com/Voldemortas/bun-react-server .
git remote remove origin
bun install
```

## Code tree

Define routes in `/src/pages.ts`   
Write react code in `/src/front/` (each route component is suggested to be in its own directory)  
Write backend code in `/src/back/`  
Add static content in `/src/static/` 

## Building details 

Code building works in several steps: 
1. Removes `/out/` directory and creates an empty one  
2. Copies content from `/src/static` to `/out/static`  
3. Creates `/temp/` directory and copies content from `/src/front/` there  
4. Runs *SASS* compiler on `*.scss` files found in `/temp` and creates coresponding `[name].css` files 
5. Checks `/src/pages/` for *React* entry points and based on them builds single `[name].js` and `[name].css` files into `/out/front/` directory
6. Compiles `/src/back/server.ts` into bundled `/out/back/server.js`

## Predefined commands

`bun run build` - builds dev (by default) build  
`bun run build-prod` - builds production build (minifies and other stuff)  
`bun run watch` - builds dev build and serves code while actively watching for code changes - **not bug free**  
`bun run serve` - serves built code from `/out/back/server.js`  

## Caveats

[Css Modules](https://github.com/css-modules/css-modules) are not supported hence [BEM](https://getbem.com/introduction/) is suggested. Having each react-route in a separate directory is highly suggested for this reason.  
*Pm2* is not supported as it's not that friendly with a bun runtime.

---------

This project was created using `bun init` in bun v1.1.30. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
