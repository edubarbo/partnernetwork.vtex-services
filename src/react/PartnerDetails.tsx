// Dependencies
import React, { useState } from 'react'
import { PageBlock, Tabs, Tab, Spinner, Button, Alert } from 'vtex.styleguide'
import { useDisclosure } from 'vtex.styleguide/utils'
import { useQuery, gql } from '@apollo/client'
import { useRuntime } from 'vtex.render-runtime'
import axios from 'axios'

// Containers
import PartnerData from './containers/PartnerData'
import PartnerClients from './containers/PartnerClients'
//import PartnerServices from './containers/PartnerServices'
import DenyModal from './components/DenyModal'

const partnerQuery = gql`
  query getPartner($account: String) {
    partner(account: $account)
      @context(provider: "partnernetwork.vtex-services@1.x") {
      id
      name
      email
      status
      imgURL
      website
      types
      regions
      description
      categories {
        id
        name
      }
      subcategories {
        categoryID
        subcategories {
          id
          name
        }
      }
      mainCategoryId
    }
  }
`

type Status = 'APPROVING' | 'DENYING' | 'DENIED' | 'ERROR' | 'SUCCESS'

const PartnerDetails: React.FC = () => {
  const [status, setStatus] = useState<Status>()
  const [statusButton, setStatusButton] = useState('')
  const [currentTab, setCurrentTab] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    route: { params },
  } = useRuntime()

  const { data, loading } = useQuery(partnerQuery, {
    variables: {
      account: params.account,
    },
  })

  const handleRateButton = (param: string) => {
    onOpen()
    setStatusButton(param)
  }

  const handleDeny = async (reason: string, observation: string) => {
    const partnerID = data.partner.id

    if (statusButton === 'Deny') {
      try {
        setStatus('DENYING')

        await axios.patch(`/api/dataentities/PN/documents/${partnerID}`, {
          status: 'DENIED',
          reasonDeny: reason,
          observationDeny: observation,
        })

        setStatus('DENIED')
      } catch {
        setStatus('ERROR')
      }
    } else if (statusButton === 'Approve') {
      try {
        setStatus('APPROVING')

        await axios.patch(`/api/dataentities/PN/documents/${partnerID}`, {
          status: 'APPROVED',
          reasonDeny: reason,
          observationDeny: observation,
        })

        setStatus('SUCCESS')
      } catch {
        setStatus('ERROR')
      }
    }
  }

  if (loading) {
    return (
      <PageBlock variation="full">
        <div className="flex justify-center ma6">
          <Spinner color="#f71963" size={50} />
        </div>
      </PageBlock>
    )
  }

  return (
    <>
      <Tabs fullWidth>
        <Tab
          label="Partner"
          active={currentTab === 0}
          onClick={() => setCurrentTab(0)}
        >
          <PageBlock variation="full">
            <PartnerData data={data.partner} currentStatus={status} />
          </PageBlock>
        </Tab>

        {/*<Tab
          label="Services"
          active={currentTab === 1}
          disabled={!data.partner.id}
          onClick={() => setCurrentTab(1)}
        >
          <PageBlock variation="full">
            <PartnerServices partnerID={data.partner.id} />
          </PageBlock>
  </Tab>*/}

        <Tab
          label="Clients"
          active={currentTab === 2}
          disabled={!data.partner.id}
          onClick={() => setCurrentTab(2)}
        >
          <PageBlock variation="full">
            <PartnerClients partnerID={data.partner.id} />
          </PageBlock>
        </Tab>
      </Tabs>

      {status && (
        <div className="mb6">
          {status === 'SUCCESS' && <Alert type="success">SUCCESS</Alert>}
          {status === 'ERROR' && <Alert type="warning">ERROR</Alert>}
          {status === 'DENIED' && <Alert type="error">DENIED</Alert>}
        </div>
      )}

      <div className="actions flex flex-column-reverse flex-row-l justify-between">
        <div className="mb3 mb0-l button-deny-container">
          <Button
            variation="danger"
            onClick={() => handleRateButton('Deny')}
            disabled={!data.partner.id || status === 'APPROVING'}
          >
            {status === 'APPROVING' || status === 'DENYING' ? (
              <Spinner color="#FFF" size={20} />
            ) : (
              'Deny'
            )}
          </Button>
        </div>
        <div className="mb3 mb0-l button-save-container">
          <Button
            onClick={() => handleRateButton('Approve')}
            disabled={!data.partner.id || status === 'APPROVING'}
          >
            {status === 'APPROVING' || status === 'DENYING' ? (
              <Spinner color="#FFF" size={20} />
            ) : (
              'Approve'
            )}
          </Button>
        </div>
      </div>
      <DenyModal
        show={isOpen}
        onClose={onClose}
        onDeny={handleDeny}
        statusButton={statusButton}
      />
    </>
  )
}

export default PartnerDetails
