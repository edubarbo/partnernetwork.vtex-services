export async function activateSKU(ctx: CustomEventContext) {
  const { sku } = ctx.state

  await ctx.clients.catalog.updateSKU({
    ...sku,
    IsActive: true,
  })
}
