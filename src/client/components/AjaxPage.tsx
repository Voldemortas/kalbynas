import React from 'react'
import getLocale from './common/getLocale'
import useFetch from './common/useFetch'

export default function AjaxPage({pageId}: {pageId: string}) {
  const locale = getLocale()
  const ajaxedPage = useFetch<AjaxPageModel>(`/api/page?pageId=${pageId}`)

  if (ajaxedPage.status !== 'done') {
    return null
  }

  return (
    <React.Suspense>
      {ajaxedPage.data!.body.map((content) => {
        if (!!content.text) {
          return content.text
        } else {
          const componentPathName = ajaxedPage.data!.definitions.find(
            ({name}) => {
              return content.componentName! === name
            }
          )!.path
          const Component = React.lazy(() => import(componentPathName))
          return (
            <Component
              key={JSON.stringify(content)}
              {...JSON.parse(content.componentParams!)}
            />
          )
        }
      })}
    </React.Suspense>
  )
}

interface AjaxPageModel {
  meta: {
    description?: string
    keywords?: string
  }
  definitions: {name: string; path: string}[]
  body: (
    | {text: string; componentName?: never; componentParams?: never}
    | {componentName: string; componentParams?: string; text?: never}
  )[]
}

