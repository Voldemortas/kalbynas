import type {TranspilerOptions as BunTranspilerOptions} from 'bun'

const defaultTranspilerOptions: BunTranspilerOptions = {
  target: 'browser',
  inline: true,
  minifyWhitespace: true,
}

const reactTranspilerOptions: BunTranspilerOptions = {
  ...defaultTranspilerOptions,
  loader: 'tsx',
  tsconfig: {
    compilerOptions: {
      jsx: 'react',
    },
  },
}

const tsTranspilerOptions: BunTranspilerOptions = {
  ...defaultTranspilerOptions,
  loader: 'ts',
}

const reactOptions = {
  ignores: [/react-dom\/client/i, /^\~\/server[^]+/i],
  transformations: [
    {key: /^react$/i, value: '/assets/react.js'},
    {key: /^([^]*\/[^\.]*)$/, value: '$1.js'},
    {key: /\.less$/, value: '.css.js'},
    {key: /\.json$/, value: '.json.js'},
  ],
}
const apiOptions = {
  ignores: [/\/types$/i],
}

export {
  reactOptions,
  reactTranspilerOptions,
  tsTranspilerOptions,
  defaultTranspilerOptions,
  apiOptions,
}

