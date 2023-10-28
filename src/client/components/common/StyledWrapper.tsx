/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React, {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

export default function StyledWrapper({
  children,
  stylesheet,
}: {
  children: React.ReactNode | React.ReactNode[]
  stylesheet: CSSStyleSheet
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    console.log('ref update')
    if (ref.current !== null) {
      let combinedStyleSheet = new CSSStyleSheet()
      ;[
        ...[...document.styleSheets].map((x) => [...x.cssRules]).flat(),
        ...stylesheet.cssRules,
      ].forEach(({cssText}) => {
        combinedStyleSheet.insertRule(cssText)
      })

      if (!!ref.current.shadowRoot) {
        return
      }
      const shadow = ref.current.attachShadow({mode: 'open'})
      const domContainer = document.createElement('span') as HTMLSpanElement
      domContainer.setAttribute('style', 'display: contents')
      ReactDOM.createRoot(domContainer).render(children)

      ref.current.shadowRoot!.appendChild(domContainer)
      shadow.adoptedStyleSheets = [combinedStyleSheet]
    }
  }, [ref])

  return <span ref={ref} style={{display: 'contents'}}></span>
}

