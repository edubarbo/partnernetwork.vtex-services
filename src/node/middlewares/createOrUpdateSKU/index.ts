export async function createOrUpdateSKU(ctx: CustomEventContext) {
  const {
    account,
    product: { Id, Name },
  } = ctx.state

  const skuData = {
    ProductId: Number(Id),
    IsActive: false,
    Name: `${Name}`,
    RefId: `sku_${account}`,
    PackagedHeight: 10,
    PackagedLength: 10,
    PackagedWidth: 10,
    PackagedWeightKg: 10,
    Height: null,
    Length: null,
    Width: null,
    WeightKg: null,
    CubicWeight: 0.1667,
    Quantity: 99999,
    UnitPrice: 10,
    IsKit: false,
    CreationDate: null,
    RewardValue: null,
    EstimatedDateArrival: null,
    ManufacturerCode: `code_${account}`,
    CommercialConditionId: 1,
    MeasurementUnit: 'un',
    UnitMultiplier: 1,
    ModalType: null,
    ActivateIfPossible: true,
    KitItensSellApart: false,
  }

  try {
    const sku = await ctx.clients.catalog.getSKUByRefId(skuData.RefId)

    if (sku) {
      ctx.state.sku = await ctx.clients.catalog.updateSKU({
        ...skuData,
        Id: sku.Id,
        IsActive: sku.IsActive,
      })
    }
  } catch (error) {
    ctx.state.sku = await ctx.clients.catalog.createSKU(skuData)
  }
}
