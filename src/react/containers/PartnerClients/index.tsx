// Dependencies
import React from 'react'
import { Spinner } from 'vtex.styleguide'
import { useQuery, gql } from '@apollo/client'

// Components
import Title from '../../components/Title'
import Table from '../../components/Table'
import TableRow from '../../components/TableRow'

// Queries
const getClientsQuery = gql`
  query getClients($partnerID: ID) {
    clients(partnerID: $partnerID)
      @context(provider: "partnernetwork.vtex-services@1.x") {
      id
      name
      imgURL
      isActive
      description
      accountName
    }
  }
`

interface PartnerClientsProps {
  partnerID: string
}

const PartnerClients: React.FC<PartnerClientsProps> = ({ partnerID }) => {
  const { data, loading: getLoading } = useQuery(getClientsQuery, {
    variables: {
      partnerID,
    },
  })

  if (getLoading) {
    return (
      <div className="flex justify-center ma6">
        <Spinner color="#f71963" size={50} />
      </div>
    )
  }

  return (
    <>
      <Title>Clients</Title>

      {data && data.clients.length > 0 && (
        <Table>
          {data.clients.map((client: IClientItem) => (
            <TableRow
            id={client.id}
            handler={() => {}}
              key={client.id}
              name={client.name}
              imgURL={client.imgURL}
              isActive={client.isActive}
              description={client.description}
            />
          ))}
        </Table>
      )}
    </>
  )
}

export default PartnerClients
