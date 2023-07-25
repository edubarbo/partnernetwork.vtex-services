export async function addPriceToSKU(ctx: CustomEventContext) {
  const { sku } = ctx.state

  try {
    await ctx.clients.pricingClient.addPrice(sku.Id, {
      markup: 30,
      basePrice: 100,
    })
  } catch (error) {
    console.error('PricingMiddleware', error)
  }
}
