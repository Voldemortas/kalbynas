import React from 'react'
import CommonPage from '../components/common/CommonPage'
import {DialectologyPageType} from '~/server/ssr/dialectology'

export default function Dialectology(props: DialectologyPageType) {
  return <CommonPage>{props.text}</CommonPage>
}

