import React from 'react'
import useFetch from './common/useFetch'

export default function AjaxPage({pageId}: {pageId: string}) {
  const ajaxedPage = useFetch<AjaxPageModel>(`/api/page?pageId=${pageId}`)

  if (ajaxedPage.status !== 'done') {
    return null
  }

  return (
    <React.Suspense>
      {ajaxedPage.data!.map((content) => {
        if (content.type === 'html') {
          return (
            <div
              dangerouslySetInnerHTML={{__html: content.text}}
              key={content.text}
            />
          )
        } else {
          const Component = React.lazy(() => import(content.path))
          return (
            <Component
              key={JSON.stringify(content)}
              {...JSON.parse(content.params!)}
            />
          )
        }
      })}
    </React.Suspense>
  )
}

export type AjaxPageModel = (
  | {type: 'html'; text: string; path: never; params: never}
  | {
      type: 'component'
      text: never
      path: string
      params?: string
    }
)[]

