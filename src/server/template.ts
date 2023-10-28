export default function generateHtml(options: GenerateHtmlOptions) {
  const componentScript = options.component
    ? `<script type="module">
    import Component from '${options.component}'

    const domContainer = document.querySelector("#root")
    const root = ReactDOM.createRoot(domContainer)
    root.render(React.createElement(React.StrictMode,null,React.createElement(Component, {})))
</script>`
    : ''
  return `<!DOCTYPE html>
<html ${options.language ? `lang="${options.language}"` : ''}>
  <head>
    ${options.head?.replaceAll('\n', '\n    ')}
  </head>
    <body>
    ${options.basicHtml.replaceAll('\n', '\n    ')}
    ${componentScript.replaceAll('\n', '\n    ')}
  </body>
</html>`
}

interface GenerateHtmlOptions {
  basicHtml: string
  component?: string
  head?: string
  language?: string
}

