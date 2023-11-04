import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom/client'
import Loadable from './Loadable'

export default function HtmlResolver({children}: {children: string}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ;[...ref.current.children]
        .filter((childNode) => childNode.tagName.toLowerCase() === 'component')
        .toReversed()
        .forEach((childNode) => {
          const data = [
            ...childNode.attributes,
            {name: 'children', value: childNode.innerHTML},
          ].reduce((acc, {name, value}) => ({...acc, [name]: value}), {}) as {
            path: string
            params: string
            children: string
          }
          const loaded = <Loadable {...data} />
          const spanElement = document.createElement('span')
          spanElement.setAttribute('style', 'display: contents')
          ReactDOM.createRoot(spanElement).render(loaded)
          childNode.replaceWith(spanElement)
        })
    }
  }, [])

  const result = (
    <React.Suspense fallback="loading">
      <div
        dangerouslySetInnerHTML={{__html: children}}
        style={{display: 'contents'}}
        ref={ref}
      />
    </React.Suspense>
  )
  return result
}

