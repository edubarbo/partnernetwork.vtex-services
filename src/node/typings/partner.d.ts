export interface ICategory {
  id: string
  name: string
}

export interface ISubcategories {
  categoryID: string
  subcategories: ICategory[]
}

export interface IPartner {
  id: string
  name: string
  description: string
  imgFile: string
  website: string
  types: string[]
  regions: string[]
  account: string
  categories: ICategory | string
  subcategories: ISubcategories | string
  status: 'PENDING' | 'DENIED' | 'PROCESSING' | 'APPROVED'
  mainCategoryId: string
}
