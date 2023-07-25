// Typing
import { IPartner } from '../../typings/partner'

interface Args {
  page?: number
  status: string
  pageSize?: number
}

export const partnersWithPaginationInfo = async (
  _: any,
  { status, page = 1, pageSize = 10 }: Args,
  ctx: Context
) => {
  const {
    data: partners,
    pagination,
  } = await ctx.clients.masterdata.searchDocumentsWithPaginationInfo<IPartner>({
    dataEntity: 'PN',
    fields: ['_all'],
    where: `status=${status}`,
    pagination: {
      page,
      pageSize,
    },
  })

  return {
    pagination,
    partners: partners.map((partner) => ({
      ...partner,
      types: JSON.parse(partner.types.toString()),
      regions: JSON.parse(partner.regions.toString()),
      categories: JSON.parse(partner.categories.toString()),
      subcategories: JSON.parse(partner.subcategories.toString()),
    })),
  }
}
