import { json } from 'co-body'
import { sendContactEmail } from './sendContactEmail'
import { badge } from './badge'
import { getPartnerById as getPartnerByIdUtil } from '../utils/getPartnerById/index'

export default {
  approve: async function (ctx: Context, next: () => Promise<any>) {
    try{
      const body = await json(ctx.req)

      await ctx.clients.events.sendEvent('', 'publish', {
        partnerID: body.partnerID,
      })
  
      ctx.status = 204
    }
    catch (error) {
      ctx.body(error)
    }
    await next()
  },
  sendContactEmail,
  badge,
  playground: async function (ctx: Context, next: () => Promise<any>) {

    const partnerDocument = await getPartnerByIdUtil("a6c491f7-ae77-11eb-82ac-167e30deafc5", ctx)

    const productData = {
      Name: partnerDocument?.name,
      LinkId: partnerDocument?.name.toLowerCase().replace(/[\s]+/g, '-'),
      RefId: partnerDocument?.account,
      Description: partnerDocument?.description,
      DescriptionShort: partnerDocument?.description,
      KeyWords: partnerDocument?.name.toLowerCase(),
      Title: partnerDocument?.name,
      MetaTagDescription: partnerDocument?.name,
      TaxCode: '',
      BrandId: 2000000,
      DepartmentId: 1,
      CategoryId: parseInt(partnerDocument?.mainCategoryId ? partnerDocument.mainCategoryId:"0"),
      Score: 1,
      SupplierId: 1,
      AdWordsRemarketingCode: null,
      LomadeeCampaignCode: null,
      ShowWithoutStock: true,
      IsActive: false,
      IsVisible: true,
    }

    ctx.body = productData

    await next()
  }
}
