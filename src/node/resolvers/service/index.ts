// Typing
import { IService } from '../../typings/service'

interface Args {
  id: IService['id']
  locale?: string
}

export const service = async (_: any, { id, locale }: Args, ctx: Context) => {
  if (locale && locale !== 'pt-BR') {
    return ctx.clients.masterdata.searchDocuments({
      dataEntity: 'TS',
      fields: ['id', 'name', 'description'],
      where: `(parentID=${id} AND locale=${locale})`,
      pagination: {
        page: 1,
        pageSize: 5,
      },
    })
  }
  return ctx.clients.masterdata.getDocument<IService>({
    id,
    dataEntity: 'PS',
    fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
  })
}
