import React, {useEffect} from 'react'
import HtmlResolver from './HtmlResolver'
import ReactDOM from 'react-dom/client'

export default function useInjectChildNodes<E extends Element>(
  childNodes: ChildNode[],
  ref: React.RefObject<E>
) {
  useEffect(() => {
    if (ref.current) {
      ;(childNodes as Element[]).forEach((childNode) => {
        const nodeToInject = ref.current!
        if (childNode.nodeName.toLowerCase() === 'component') {
          const component = <HtmlResolver>{childNode.outerHTML}</HtmlResolver>
          const spanElement = document.createElement('span')
          ReactDOM.createRoot(spanElement).render(component)
          nodeToInject.insertAdjacentElement('beforebegin', spanElement)
        } else if (childNode.nodeName.toLowerCase() === '#text') {
          nodeToInject.insertAdjacentText('beforebegin', childNode.textContent!)
        } else {
          nodeToInject.insertAdjacentHTML('beforebegin', childNode.outerHTML)
        }
      })
      ref.current.replaceWith('')
    }
  }, [ref, childNodes])
}

