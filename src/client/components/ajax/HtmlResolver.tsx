import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom/client'
import Loadable from './Loadable'

export function traverseTree(
  element: Element,
  finderFn: (el: Element) => boolean
): Element[] {
  if (finderFn(element)) {
    return [element]
  }
  if (element.children.length === 0) {
    return [null as unknown as Element]
  }
  //@ts-ignore
  return [...element.children].reduce(
    (acc, cur) => [...acc, ...traverseTree(cur as Element, finderFn)],
    [] as ChildNode[]
  )
}

export default function HtmlResolver({children}: {children: string}) {
  const ref = useRef<HTMLTableSectionElement>(null)

  useEffect(() => {
    if (ref.current) {
      const nodes = traverseTree(
        ref.current,
        (element) => element.nodeName.toLowerCase() === 'component'
      ).filter((cNode) => !!cNode)
      nodes.forEach((childNode) => {
        //@ts-ignore
        const attributes = [...childNode.attributes].reduce(
          (acc, cur) => ({...acc, [cur.name]: cur.value}),
          {}
        ) as {[key: string]: string}
        const sanitizedAttributes = Object.entries(attributes).reduce(
          (acc, [key, val]) =>
            ['tag', 'contents'].includes(key) ? acc : {...acc, [key]: val},
          {}
        ) as {[key: string]: string}
        const childNodes = [...childNode.childNodes]
        if (!attributes.path) {
          return
        }
        const spanElement = document.createElement(attributes.tag ?? 'span')
        const loaded = (
          <Loadable
            params={sanitizedAttributes}
            path={attributes.path}
            childrenNodes={childNodes}
          />
        )
        if (attributes.contents !== 'false') {
          spanElement.setAttribute('style', 'display: contents')
        }
        spanElement.setAttribute('data-component', 'true')
        ReactDOM.createRoot(spanElement).render(loaded)
        childNode.replaceWith(spanElement)
      })
      let random = 0
      const nodesAndElements = [...ref.current.childNodes].map((ch, i, arr) => {
        if (ch.nodeName === '#text') {
          return ['text', ch.textContent]
        }
        return ['node', [...ref.current!.children][random++]]
      })

      nodesAndElements.forEach(([type, node]) => {
        if (type === 'node') {
          ref.current!.insertAdjacentElement('beforebegin', node as Element)
        } else {
          ref.current?.insertAdjacentText('beforebegin', node as string)
        }
      })
      ref.current.remove()
    }
  }, [])

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
      style={{display: 'contents'}}
      ref={ref}
    />
  )
}

