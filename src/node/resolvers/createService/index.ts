// Typing
import { IPartner } from '../../typings/partner'
import { IService } from '../../typings/service'

interface Args {
  partnerID: IPartner['id']
  input: Omit<IService, 'id' | 'partnerID'>
}

export const createService = async (
  _: any,
  { partnerID, input }: Args,
  ctx: Context
) => {
  const { name, isActive, description } = input

  await ctx.clients.masterdata.updatePartialDocument({
    id: partnerID,
    dataEntity: 'PN',
    fields: {
      status: 'PENDING',
    },
  })

  const newDocument = await ctx.clients.masterdata.createDocument({
    dataEntity: 'PS',
    fields: {
      name,
      isActive,
      partnerID,
      description,
      isRemoved: false,
    },
  })

  return ctx.clients.masterdata.getDocument<IService>({
    dataEntity: 'PS',
    id: newDocument.DocumentId,
    fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
  })
}
