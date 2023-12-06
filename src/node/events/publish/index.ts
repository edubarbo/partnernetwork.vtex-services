// Middlewares
import { getPartnerByID } from '../../middlewares/getPartnerByID'
import { createOrUpdateProduct } from '../../middlewares/createOrUpdateProduct'
import { createOrUpdateSKU } from '../../middlewares/createOrUpdateSKU'
import { createOrUpdateSKUFile } from '../../middlewares/createOrUpdateSKUFile'
import { updateProductSpecification } from '../../middlewares/updateProductSpecification'
import { addPriceToSKU } from '../../middlewares/addPriceToSKU'
import { activateSKU } from '../../middlewares/activateSKU'

//TODO: Função responsável por criar os produtos no catálogo, alterar para contemplar o novo campo de categoria
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
