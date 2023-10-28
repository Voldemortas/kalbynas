declare module '*.toml'
declare module '*.css' {
  declare const css: CSSStyleSheet
  export = css
}
declare module '*.less' {
  declare const css: CSSStyleSheet
  export = css
}

