// Dependencies
import React from 'react'

// AppWrapper
import AppWrapper from './AppWrapper'

// PartnerList
import PartnerList from './PartnerList'

const PartnerListWrapper: React.FC = () => (
  <AppWrapper title="Partner List">
    <PartnerList key={new Date().getTime()} />
  </AppWrapper>
)

export default PartnerListWrapper
