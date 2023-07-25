// Typing
import { IService } from '../../typings/service'

interface Args {
  partnerID: IService['partnerID']
}

export const services = (_: any, { partnerID }: Args, ctx: Context) => {
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
