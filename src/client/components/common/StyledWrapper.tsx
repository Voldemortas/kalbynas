/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React, {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

export default function StyledWrapper({
  children = [],
  stylesheets,
  tag = 'div',
  className,
}: {
  children?: React.ReactNode | React.ReactNode[]
  stylesheets: CSSStyleSheet | CSSStyleSheet[]
  tag?: keyof HTMLElementTagNameMap
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const sheets = [stylesheets].flat(2)
  const cssRules = [...sheets.map((x) => [...x.cssRules])].flat()
  const globalRules = [...document.styleSheets]
    .map((x) => [...x.cssRules])
    .flat()

  useEffect(() => {
    if (ref.current !== null) {
      let combinedStyleSheet = new CSSStyleSheet()
      ;[...globalRules, ...cssRules].forEach(({cssText}) => {
        combinedStyleSheet.insertRule(cssText)
      })

      const shadow =
        ref.current.shadowRoot ?? ref.current.attachShadow({mode: 'open'})

      const domContainer = document.createElement(tag) as HTMLElement
      if (!!className) {
        domContainer.setAttribute('class', className!)
      } else {
        domContainer.setAttribute('style', 'display: contents')
      }
      ReactDOM.createRoot(domContainer).render(children)
      while (!!ref.current.shadowRoot!.firstChild) {
        ref.current.shadowRoot!.removeChild(ref.current.shadowRoot!.lastChild!)
      }
      ref.current.shadowRoot!.appendChild(domContainer)
      shadow.adoptedStyleSheets = [combinedStyleSheet]
    }
  }, [ref, children, className, tag])

  return <div ref={ref} style={{display: 'contents'}}></div>
}

