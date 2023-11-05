import React from 'react'
import InjectedPage from './InjectedPage'

export default function Loadable<T extends {}>({
  path,
  params,
  childrenNodes,
}: {
  path: string
  params: T
  childrenNodes: ChildNode[]
}) {
  const Component = React.lazy(() => import(path))

  return (
    <React.Suspense fallback="Loading...">
      <Component {...params}>
        <InjectedPage childrenNodes={childrenNodes} />
      </Component>
    </React.Suspense>
  )
}

