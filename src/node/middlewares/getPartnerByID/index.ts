// Utils
import { getPartnerById as getPartnerByIdUtil } from './../../utils/getPartnerById/index'

export async function getPartnerByID(ctx: CustomEventContext) {
  const { partnerID } = ctx.body

  const partnerDocument = await getPartnerByIdUtil(partnerID, ctx)

  if (!partnerDocument) return

  ctx.state.partner = partnerDocument
  ctx.state.account = partnerDocument.account
}
