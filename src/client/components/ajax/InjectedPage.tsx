import React, {useRef} from 'react'
import useInjectChildNodes from './useInjecChildNodes'

export default function InjectedPage({
  childrenNodes = [],
}: {
  childrenNodes: ChildNode[] | ChildNode
}) {
  const ref = useRef<HTMLSpanElement>(null)
  useInjectChildNodes([childrenNodes].flat(), ref)
  return <span ref={ref} />
}

