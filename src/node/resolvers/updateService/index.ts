// Typing
import { IService } from '../../typings/service'

interface Args {
  id: IService['id']
  input: Omit<IService, 'id' | 'partnerID'>
}

export const updateService = async (
  _: any,
  { id, input }: Args,
  ctx: Context
) => {
  await ctx.clients.masterdata.updatePartialDocument({
    id,
    dataEntity: 'PS',
    fields: input,
  })

  const serviceDocument = await ctx.clients.masterdata.getDocument<IService>({
    id,
    dataEntity: 'PS',
    fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
  })

  await ctx.clients.masterdata.updatePartialDocument({
    id: serviceDocument.partnerID,
    dataEntity: 'PN',
    fields: {
      status: 'PENDING',
    },
  })

  return serviceDocument
}
