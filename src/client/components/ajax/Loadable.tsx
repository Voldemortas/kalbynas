import React from 'react'
import HtmlResolver from './HtmlResolver'

export default function Loadable({
  path,
  params = '{}',
  children = '',
}: {
  path: string
  params?: string
  children: string
}) {
  const Component = React.lazy(() => import(path))

  return (
    <React.Suspense fallback="Loading...">
      <Component {...JSON.parse(params)}>
        <HtmlResolver>{children}</HtmlResolver>
      </Component>
    </React.Suspense>
  )
}

