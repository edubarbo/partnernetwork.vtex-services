interface ICategory {
  id: string
  name: string
}

interface ISubcategories {
  categoryID: string
  subcategories: ICategory[]
}

interface ICommonFields {
  id: string
  name: string
  description: string
}

interface IClientItem extends ICommonFields {
  imgURL: string
  isActive: boolean
}

interface IServiceItem extends ICommonFields {
  isActive: boolean
}

interface IPartnerData extends ICommonFields {
  website: string
  imgURL: string
  types: string[]
  regions: string[]
  email: string
  categories: ICategory[]
  subcategories: ISubcategories[]
  status: 'PENDING' | 'DENIED' | 'PROCESSING' | 'APPROVED' | string
}

interface ISelectOption {
  label: string
  value: string
}
