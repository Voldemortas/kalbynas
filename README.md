# Kalbynas

[//]: # ([![test]&#40;https://github.com/Voldemortas/kalbynas/actions/workflows/test.yml/badge.svg&#41;]&#40;https://github.com/Voldemortas/kalbynas/actions/workflows/test.yml&#41;)

[//]: # (![lines-coverage]&#40;https://img.shields.io/endpoint?url=https://kalbynas.lt/status/lines.json&#41;)

[//]: # (![functions-coverage]&#40;https://img.shields.io/endpoint?url=https://kalbynas.lt/status/functions.json&#41;)

[//]: # (![files-coverage]&#40;https://img.shields.io/endpoint?url=https://kalbynas.lt/status/files.json&#41;)

## Live project

Project living live can be accessed by visiting [kalbynas.lt](https://kalbynas.lt)

## Installation

`bun run install`

## Predefined commands

`bun run dev` - runs a development build with a watcher  
`bun run dev` - runs a production build with a watcher  
`bun run serve` - serves a production using `pm2`

## Environment variables

Set your own environment variables in `.env`, the default fallback looks like this 

```dotenv
PORT=3000
HOSTNAME=0.0.0.0
SSL=false
```

## Caveats

[Css Modules](https://github.com/css-modules/css-modules) are not supported
hence [BEM](https://getbem.com/introduction/) is suggested. Having each react-route in a separate directory is highly
suggested for this reason.  

----
Built with [Elysia](https://elysiajs.com/) and [Bun](https://bun.sh).