import BaseLayout from 'components/base/BaseLayout'
import React from 'react'

export default function LogAlatUkurPage() {
  return (
    <div>LogAlatUkur</div>
  )
}

LogAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }