import {ComponentType, lazy, Suspense} from 'react'

type ArticleContentType =
  | {
      path: string
      content?: never
    }
  | {
      path?: never
      content: ComponentType
    }

export default function ArticleContent({path, content}: ArticleContentType) {
  if (content !== undefined) {
    const Content = content
    return <Content />
  }

  const Content = lazy(() => import(path))

  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  )
}
