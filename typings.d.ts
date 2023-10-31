declare module '*.toml'
declare module '*.json' {
  declare const json: any
  export = json
}
declare module '*.css' {
  declare const css: CSSStyleSheet
  export = css
}
declare module '*.less' {
  declare const css: CSSStyleSheet
  export = css
}

