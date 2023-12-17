import React from 'react'
import CommonPage from '../components/common/CommonPage'
import {IndexPageType} from '~/server/ssr'

export default function Index(props: IndexPageType) {
  return (
    <CommonPage>
      <article>
        <h1>{props.h1}</h1>
        <p dangerouslySetInnerHTML={{__html: props.text}} />
      </article>
    </CommonPage>
  )
}

