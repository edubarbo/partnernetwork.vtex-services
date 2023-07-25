// Typing
import { IPartner } from '../../typings/partner'

// Utils
import { getPartner } from '../../utils/getPartner'

interface Args {
  account: IPartner['account']
}

export const partner = async (_: any, { account }: Args, ctx: Context) => {
  const document = await getPartner(account, ctx)

  if (!document) return

  document.types = JSON.parse(document.types.toString())
  document.regions = JSON.parse(document.regions.toString())
  document.categories = JSON.parse(document.categories.toString())
  document.subcategories = JSON.parse(document.subcategories.toString())

  return document
}
