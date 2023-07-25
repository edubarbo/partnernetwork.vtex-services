// Dependencies
import React, { useEffect, useState } from 'react'
import { Spinner } from 'vtex.styleguide'
import { useQuery, gql, useMutation } from '@apollo/client'

// Components
import Title from '../../components/Title'
import Table from '../../components/Table'
import TableRow from '../../components/TableRow'

// Queries
const getServicesQuery = gql`
  query getServices($partnerID: ID) {
    services(partnerID: $partnerID)
      @context(provider: "partnernetwork.vtex-services@1.x") {
      id
      name
      isActive
      description
    }
  }
`

const updateServiceQuery = gql`
  mutation updateService($id: ID, $input: ServiceInput) {
    updateService(id: $id, input: $input)
      @context(provider: "partnernetwork.vtex-services@0.x") {
      id
      name
      isActive
      description
    }
  }
`


interface PartnerServicesProps {
  partnerID: string
}

const PartnerServices: React.FC<PartnerServicesProps> = ({ partnerID }) => {
  const { data, loading: getLoading, refetch} = useQuery(getServicesQuery, {
    variables: {
      partnerID,
    },
  })

  const [updateServiceMutation, {loading: updateLoading}] = useMutation(updateServiceQuery)



  const [serviceItems, setServiceItens] = useState<IServiceItem[]>([] as IServiceItem[])

  useEffect(() => {
    data && setServiceItens(data.services)
  }, [data, getLoading])


  const handleOptionCheck = async (id: string) => {
    const newServiceItems = serviceItems.map(item => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive }
      } else {
        return item
      }
    })

    setServiceItens(newServiceItems)

    const item = serviceItems.find(item => item.id === id)

    try {
      await updateServiceMutation({
        variables: {
          id:  item?.id,
          input: {
            description: item?.description,
            isActive: !item?.isActive,
            name: item?.name,
          }
        }
      }
      )

      await refetch()

    } catch (error) {
      console.error(error)
    }

  }


  if (getLoading || updateLoading) {
    return (
      <div className="flex justify-center ma6">
        <Spinner color="#f71963" size={50} />
      </div>
    )
  }

  if (serviceItems.length === 0) {
    return (
      <div className="flex justify-center ma6">
        <Title>No services available for this partner</Title>
      </div>
    )
  }

  return (
    <>
      <Title>Services</Title>

      {serviceItems && serviceItems.length > 0 && (
        <Table>
          {serviceItems.map((service: IServiceItem) => (
             <TableRow
              key={service.id}
              id={service.id}
              handler={handleOptionCheck}
               name={service.name}
               showEmptyImage={false}
               isActive={service.isActive}
               description={service.description}
              />
          ))}
        </Table>
      )}
    </>
  )
}

export default PartnerServices
