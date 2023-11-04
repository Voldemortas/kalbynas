import React from 'react'
import useFetch from '../common/useFetch'
import Loadable from './Loadable'
import HtmlResolver from './HtmlResolver'

export default function AjaxPage({pageId}: {pageId: string}) {
  const ajaxedPage = useFetch<string>(`/api/page?pageId=${pageId}`)

  if (ajaxedPage.status !== 'done') {
    return null
  }

  return (
    <article>
      <HtmlResolver>{ajaxedPage.data!}</HtmlResolver>
    </article>
  )
}

export type AjaxPageModel = (
  | {type: 'html'; text: string; path: never; params: never}
  | {
      type: 'component'
      text?: string
      path: string
      params?: string
    }
)[]

