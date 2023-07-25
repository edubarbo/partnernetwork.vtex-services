export async function createOrUpdateSKUFile(ctx: CustomEventContext) {
  const {
    account,
    partner,
    product: { Name },
    sku: { Id: skuId },
  } = ctx.state

  if (!skuId) return

  let skuFiles
  const newFileData = {
    IsMain: true,
    Label: `${Name} logo`,
    Name: `logo_${account}`,
    Text: `${Name} logo`,
    Url: partner.imgURL,
  }

  try {
    skuFiles = await ctx.clients.catalog.getSKUFile(Number(skuId))

    if (skuFiles) {
      await ctx.clients.catalog.updateSKUFile(
        skuId,
        skuFiles[0].Id,
        newFileData
      )
    }
  } catch (error) {
    await ctx.clients.catalog.createSKUFile(skuId, newFileData)
  }
}
