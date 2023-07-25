// Typing
import { IService } from '../../typings/service'
import { ICategory, ISubcategories } from '../../typings/partner'

const getServiceHTML = (service: Pick<IService, 'name' | 'description'>) => {
  return `
    <h2 class="vtex-specs-title">${service.name}</h2>
    <p class="vtex-specs-content">${service.description}</p>
  `
}

const getWebsiteHTML = (website: string) =>
  `<a href="${website}" target="_blank" rel="noopener" class="vtex-product-specification-website">${website}</a>`

const MAX_SERVICE_ITEMS = 5

export async function updateProductSpecification(ctx: CustomEventContext) {
  const {
    partner,
    product: { Id },
  } = ctx.state

  const services = (await ctx.clients.masterdata.searchDocuments<IService>({
    dataEntity: 'PS',
    fields: ['name', 'description'],
    where: `(partnerID=${partner.id} AND isRemoved=false AND isActive=true)`,
    pagination: {
      page: 1,
      pageSize: 5,
    },
  })) as Pick<IService, 'name' | 'description'>[]

  let specificationServices = []

  for (let index = 0; index < MAX_SERVICE_ITEMS; index++) {
    const currentService = services[index]

    if (!currentService) {
      specificationServices.push({
        Name: `Service ${index + 1}`,
        Value: [''],
      })

      continue
    }

    specificationServices.push({
      Name: `Service ${index + 1}`,
      Value: [
        getServiceHTML({
          name: currentService.name,
          description: currentService.description,
        }),
      ],
    })
  }

  const specificationPartnerType = {
    Name: 'Tipo de Parceiro',
    Value: [JSON.parse(partner.types.toString().replace(/'/g, '"')).join(', ')],
  }

  const specificationRegions = {
    Name: 'Região',
    Value: JSON.parse(partner.regions.toString().replace(/'/g, '"')),
  }

  const specificationWebsite = {
    Name: 'Website',
    Value: [getWebsiteHTML(partner.website)],
  }

  const categories = JSON.parse(
    partner.categories.toString().replace(/'/g, '"')
  ) as ICategory[]
  const subcategories = JSON.parse(
    partner.subcategories.toString().replace(/'/g, '"')
  ) as ISubcategories[]

  const specificationCategories = {
    Name: 'Categoria',
    Value: categories.map(category => category.name),
  }

  const specificationSubcategories = {
    Name: 'SubCategoria',
    Value: subcategories
      .map(item => item.subcategories.map(({ name }) => name))
      .reduce((arr, items) => [...arr, ...items], []),
  }

  const specificationData = [
    ...specificationServices,
    specificationPartnerType,
    specificationRegions,
    specificationWebsite,
    specificationCategories,
    specificationSubcategories,
  ]

  await ctx.clients.catalog.updateProductSpecification(Id, specificationData)
}
