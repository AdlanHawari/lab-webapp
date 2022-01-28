import BaseLayout from 'components/base/BaseLayout';
import ProfileSection from 'components/base/profilesection/ProfileSection';
import React from 'react';

export default function PersonelProfilePage() {
  return(
    <ProfileSection/>
  )
}

PersonelProfilePage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
