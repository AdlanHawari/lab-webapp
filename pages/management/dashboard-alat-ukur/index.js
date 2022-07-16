import BaseLayout from 'components/base/BaseLayout'
import React from 'react'

export default function DashboardAlatUkurPage() {
  return (
    <div>DashboardAlatUkurPage</div>
  )
}

DashboardAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
