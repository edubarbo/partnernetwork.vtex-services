// Dependencies
import { omit } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'
import { IService } from '../../typings/service'

interface Args {
  partnerID: IPartner['id']
  services: IService[]
}

const getAllServices = (partnerID: IPartner['id'], ctx: Context) => {
  return ctx.clients.masterdata.searchDocuments<IService>({
    dataEntity: 'PS',
    fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
    where: `(partnerID=${partnerID} AND isRemoved=false)`,
    pagination: {
      page: 1,
      pageSize: 5,
    },
  })
}

export const saveServices = async (
  _: any,
  { partnerID, services }: Args,
  ctx: Context
) => {
  await ctx.clients.masterdata.updatePartialDocument({
    id: partnerID,
    dataEntity: 'PN',
    fields: {
      status: 'PENDING',
    },
  })

  const promises = services.map((service) => {
    return ctx.clients.masterdata.updatePartialDocument({
      id: service.id,
      dataEntity: 'PS',
      fields: omit(service, 'id'),
    })
  })

  await Promise.all(promises)

  return getAllServices(partnerID, ctx)
}
