// Middlewares
import { getPartnerByID } from '../../middlewares/getPartnerByID'
import { createOrUpdateProduct } from '../../middlewares/createOrUpdateProduct'
import { createOrUpdateSKU } from '../../middlewares/createOrUpdateSKU'
import { createOrUpdateSKUFile } from '../../middlewares/createOrUpdateSKUFile'
import { updateProductSpecification } from '../../middlewares/updateProductSpecification'
import { addPriceToSKU } from '../../middlewares/addPriceToSKU'
import { activateSKU } from '../../middlewares/activateSKU'

export async function publish(
  ctx: CustomEventContext,
  next: () => Promise<any>
) {
  await getPartnerByID(ctx)
  await createOrUpdateProduct(ctx)
  await updateProductSpecification(ctx)
  await createOrUpdateSKU(ctx)
  await createOrUpdateSKUFile(ctx)
  await activateSKU(ctx)
  await addPriceToSKU(ctx)

  await next()
}
