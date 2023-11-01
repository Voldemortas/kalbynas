import React from 'react'
import CommonPage from '../components/common/CommonPage'
import AjaxPage from '../components/AjaxPage'

export default function Index() {
  return (
    <CommonPage>
      <AjaxPage pageId="dialectology" />
    </CommonPage>
  )
}

