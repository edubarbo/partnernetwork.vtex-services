// Dependencies
import { formatISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const getReleaseDate = () => {
  const timeZone = 'America/Sao_Paulo'
  const zonedDate = utcToZonedTime(new Date(), timeZone)

  return formatISO(zonedDate)
}

export async function createOrUpdateProduct(ctx: CustomEventContext) {
  const { partner, account } = ctx.state
  const product = await ctx.clients.catalog.getProductByRefId(account)

  const productData = {
    Name: partner.name,
    LinkId: partner.name.toLowerCase().replace(/[\s]+/g, '-'),
    RefId: partner.account,
    Description: partner.description,
    DescriptionShort: partner.description,
    KeyWords: partner.name.toLowerCase(),
    Title: partner.name,
    MetaTagDescription: partner.name,
    TaxCode: '',
    BrandId: 2000000,
    DepartmentId: 1,
    CategoryId: parseInt(partner.mainCategoryId),
    Score: 1,
    SupplierId: 1,
    AdWordsRemarketingCode: null,
    LomadeeCampaignCode: null,
    ShowWithoutStock: true,
    IsActive: true,
    IsVisible: true,
    ReleaseDate: getReleaseDate(),
  }

  if (product && product.Id) {
    ctx.state.product = await ctx.clients.catalog.updateProductById(
      Number(product.Id),
      productData
    )
  } else {
    ctx.state.product = await ctx.clients.catalog.createProduct(productData)

    await ctx.clients.catalog.createProductToTradePolicy(ctx.state.product.Id)
  }
}
