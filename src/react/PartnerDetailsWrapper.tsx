// Dependencies
import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

// AppWrapper
import AppWrapper from './AppWrapper'

// PartnerDetails
import PartnerDetails from './PartnerDetails'

const PartnerDetailsWrapper: React.FC = () => {
  const { navigate } = useRuntime()

  return (
    <AppWrapper
      title="Partner Details"
      linkLabel="Partners"
      onLinkClick={() => {
        navigate({
          page: 'admin.app.partner-list',
          fallbackToWindowLocation: true,
          fetchPage: true,
        })
      }}
    >
      <PartnerDetails />
    </AppWrapper>
  )
}

export default PartnerDetailsWrapper
