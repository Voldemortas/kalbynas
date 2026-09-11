import {renderToReadableStream} from 'react-dom/server'
import React, {type ReactNode} from 'react'
import {ALTERNATES, ALTERNATES_TYPE} from 'src/commons/alternate'
import translations from 'src/translations/renderReact'
import {getNewUrl} from 'src/commons/react/Header'
import * as htmlfyer from 'htmlfy'

const REACT_PRELOADS =
  Bun.env.NODE_ENV?.toLowerCase() === 'production'
    ? ['https://esm.sh/react@19?prod']
    : ['https://esm.sh/react@19?dev']

const htmlfy =
  Bun.env.NODE_ENV?.toLowerCase() !== 'production'
    ? htmlfyer.prettify
    : htmlfyer.minify

export default async function renderReactPage<
  T extends {locale: ALTERNATES_TYPE; pathname: string},
>(
  data: T,
  Node: (data: T) => ReactNode,
  reactUrl: string,
  preloads: string[] = []
): Promise<Response> {
  const allPreloads = [...REACT_PRELOADS, reactUrl, ...preloads]

  const stream = await renderToReadableStream(React.createElement(Node, data))
  await stream.allReady

  const html = (await new Response(stream).text()).replaceAll(
    /<link rel="preload" as="image" href="[^"]*"\s*\/>/g,
    ''
  )

  return new Response(
    htmlfy(
      `<!doctype html>
<html lang="${data.locale}">
  <head>
      <title>${translations.title.format(data.locale)}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${translations.description.format(data.locale)}"/>
      <meta name="keywords" content="${translations.keywords.format(data.locale)}"/>
      ${ALTERNATES.filter((alternate) => alternate !== data.locale)
        .map(
          (alternate) =>
            `<link rel="alternate" hreflang="${alternate}" href="${getNewUrl(alternate, data.pathname)}"/>`
        )
        .join('      \n')}
      <link rel="preload" as="image" href="/static/lt.png" />
      <link rel="preload" as="image" href="/static/en.png" />
      <link rel="stylesheet" href="/static/DoulosSIL.css" />
      <link rel="stylesheet" href="/static/NotoSans.css" />
      <link rel="stylesheet" href="/static/global.css" />
      <script src="https://cdn.jsdelivr.net/gh/Voldemortas/zodziu-dalys@master/zodziu-dalys.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Voldemortas/zodziu-dalys@master/zodziu-dalys.css" />
      <script type="importmap">
        {
          "imports": {
            ${
              Bun.env.NODE_ENV?.toLowerCase() === 'production'
                ? `"react": "https://esm.sh/react@19?prod",
            "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime?prod",
            "react-dom/client": "https://esm.sh/react-dom@19/client?prod"`
                : `"react": "https://esm.sh/react@19?dev",
            "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime?dev",
            "react/jsx-dev-runtime": "https://esm.sh/react@19/jsx-dev-runtime?dev",
            "react-dom/client": "https://esm.sh/react-dom@19/client?dev"`
            }
          }
        }
      </script>
      ${allPreloads.map((preload) => `<link rel="modulepreload" href="${preload}" />`).join('\n      ')}
  </head>
  <body>
      <react>
        ${html}
      </react>
      <script type="module">
      import React from 'react';
      import {hydrateRoot} from 'react-dom/client';
      import Component from '${reactUrl}';
      const preloads = await Promise.all([${preloads.map((preload) => `import('${preload}')`).join(',')}]);
      const data = ${JSON.stringify(data).replaceAll(
        /":"(.*?(?<!\\))"/gs,
        '":`$1`'
      )};
      hydrateRoot(
        document.querySelector('react'),
        React.createElement(Component, {...data, preloads}),
        {           
          onRecoverableError() {},
        }
      );
    </script>
  </body>
</html>`,
      {
        ignore:
          Bun.env.NODE_ENV?.toLowerCase() === 'production' ? [] : ['script'],
        strict: true,
      }
    ),
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    }
  )
}
