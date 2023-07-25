export interface ICollectionResponse {
  Id: number
  Name: string
  Description: unknown
  Searchable: boolean
  Highlight: boolean
  DateFrom: string
  DateTo: string
  TotalProducts: number
  Type: string
}
export interface ICollectionPayload {
  Name: string
  Searchable: boolean
  Highlight: boolean
  DateFrom: string
  DateTo: string
}

export interface ISubCollectionResponse {
  Id: number
  CollectionId: number
  Name: string
  Type: string
  PreSale: boolean
  Release: boolean
}

export interface ISubCollectionPayload {
  Id: number
  CollectionId: number
  Name: string
  Type: string
  PreSale: boolean
  Release: boolean
}

export interface IBrand {
  Active: boolean
  AdWordsRemarketingCode: string
  Id: number
  Keywords: string
  LinkId: string
  LomadeeCampaignCode: string
  MenuHome: boolean
  Name: string
  Score: string | null
  SiteTitle: string
  Text: string
}

export interface ISKUPayload {
  Id: number
  ProductId: number
  IsActive: false
  Name: string
  RefId: string
  Height: number
  Length: number
  Width: number
  WeightKg: number
  PackagedHeight: number
  PackagedLength: number
  PackagedWidth: number
  PackagedWeightKg: number
  ModalId: number
  CubicWeight: number
  IsKit: boolean
  CreationDate: string | null
  RewardValue: number | null
  EstimatedDateArrival: string | null
  ManufacturerCode: string
  CommercialConditionId: number
  MeasurementUnit: string
  UnitMultiplier: number
  ModalType: string | null
  KitItensSellApart: boolean
}

export interface ISKUKitPayload {
  StockKeepingUnitParent: number
  StockKeepingUnitId: number
  Quantity: number
  UnitPrice: number
}

export interface CreateProductData {
  Name: string
  DepartmentId: number
  CategoryId: number
  BrandId: number
  LinkId: string
  RefId: string
  IsVisible: boolean
  Description: string
  DescriptionShort: string
  ReleaseDate: string
  KeyWords: string
  Title: string
  IsActive: boolean
  TaxCode: string | null
  MetaTagDescription: string
  SupplierId: number | null
  ShowWithoutStock: boolean
  AdWordsRemarketingCode: string | null
  LomadeeCampaignCode: string | null
  Score: number | null
}

export interface CreateProductResponse {
  Id: number
  Name: string
  DepartmentId: number
  CategoryId: number
  BrandId: number
  LinkId: string
  RefId: string
  IsVisible: boolean
  Description: string
  DescriptionShort: string
  ReleaseDate: string
  KeyWords: string
  Title: string
  IsActive: boolean
  TaxCode: string | null
  MetaTagDescription: string
  SupplierId: number | null
  ShowWithoutStock: boolean
  AdWordsRemarketingCode: null
  LomadeeCampaignCode: null
  Score: number | null
}

export interface GetProductByRefIdResponse {
  Id: string
  Name: string
  DepartmentId: string
  CategoryId: string
  BrandId: string
  LinkId: string
  RefId: string
  IsVisible: string
  Description: string
  DescriptionShort: string
  ReleaseDate: Date
  KeyWords: string
  Title: string
  IsActive: string
  TaxCode: any[]
  MetaTagDescription: string
  SupplierId: string
  ShowWithoutStock: string
}

export interface AssociateSKUAttachmentData {
  AttachmentId: number
  SkuId: number
}

export interface AssociateSKUAttachmentResponse {
  Id: number
  AttachmentId: number
  SkuId: number
}

export interface CreateSKUFileData {
  IsMain: boolean
  Label: string
  Name: string
  Text: string | null
  Url: string
}

export interface CreateSKUFileResponse {
  Id: number
  SkuId: number
  Name: string
  IsMain: boolean
  Label: string
}

export interface CreateAttachmentData {
  Name: string
  IsRequired: boolean
  IsActive: boolean
  Domains: Domain[]
}

export interface Domain {
  FieldName: string
  MaxCaracters: string
  DomainValues: string
}

export interface CreateAttachmentResponse extends CreateAttachmentData {
  Id: number
}

export interface GetSpecificationsByCategoryIdResponse {
  Name: string
  CategoryId: number
  FieldId: number
  IsActive: boolean
  IsStockKeepingUnit: boolean
}

export interface GetSpecificationFieldValuesByFieldIdResponse {
  FieldValueId: number
  Value: string
  IsActive: boolean
  Position: number
}

export interface CreateSKUSpecificationData {
  FieldId: number
  FieldValueId: number
}

export interface CreateSKUSpecificationResponse
  extends CreateSKUSpecificationData {
  Id: number
  SkuId: number
  Text: string
}

export interface CreateSKUData {
  ProductId: number
  IsActive: boolean
  ActivateIfPossible: boolean
  Name: string
  RefId: string
  PackagedHeight: number
  PackagedLength: number
  PackagedWidth: number
  PackagedWeightKg: number
  Height: number | null
  Length: number | null
  Width: number | null
  WeightKg: number | null
  CubicWeight: number | null
  IsKit: boolean
  CreationDate: string | null
  RewardValue: number | null
  EstimatedDateArrival: string | null
  ManufacturerCode: string
  CommercialConditionId: number
  MeasurementUnit: string
  UnitMultiplier: number
  ModalType: string | null
  KitItensSellApart: boolean
}

export interface CreateSKUResponse {
  Id: number
  ProductId: number
  IsActive: boolean
  Name: string
  RefId: string
  PackagedHeight: number
  PackagedLength: number
  PackagedWidth: number
  PackagedWeightKg: number
  Height: number | null
  Length: number | null
  Width: number | null
  WeightKg: number | null
  CubicWeight: number | null
  IsKit: boolean
  CreationDate: string | null
  RewardValue: number | null
  EstimatedDateArrival: string | null
  ManufacturerCode: string
  CommercialConditionId: number
  MeasurementUnit: string
  UnitMultiplier: number
  ModalType: null
  KitItensSellApart: boolean
}

export interface CreateBrandData {
  Id: number
  Active: boolean
  AdWordsRemarketingCode: null
  Keywords: string
  LomadeeCampaignCode: null
  MenuHome: boolean
  Name: string
  Score: null
  SiteTitle: string
  Text: string
}

export interface CreateBrandResponse {
  Id: number
  Name: string
  Text: string
  Keywords: string
  SiteTitle: string
  Active: boolean
  MenuHome: boolean
  AdWordsRemarketingCode: null
  LomadeeCampaignCode: null
  Score: null
  LinkId: null
}

export interface CreateCategoryData {
  Id: number
  Name: string
  Keywords: string
  Title: string
  Description: string
  ShowInStoreFront: boolean
  IsActive: boolean
  ActiveStoreFrontLink: boolean
  ShowBrandFilter: boolean
}

export interface CreateCategoryResponse {
  Id: number
  Name: string
  FatherCategoryId: null
  Title: string
  Description: string
  Keywords: string
  IsActive: boolean
  LomadeeCampaignCode: null
  AdWordsRemarketingCode: null
  ShowInStoreFront: boolean
  ShowBrandFilter: boolean
  ActiveStoreFrontLink: boolean
  GlobalCategoryId: number
  StockKeepingUnitSelectionMode: string
  Score: null
  LinkId: null
  HasChildren: boolean
}

export interface CreateSpecificationGroupData {
  CategoryId: number
  Name: string
}

export interface CreateSpecificationGroupResponse
  extends CreateSpecificationGroupData {
  Id: number
  Position: number
}

export interface CreateSpecificationFieldData {
  Name: string
  CategoryId: number
  IsActive: boolean
  IsRequired: boolean
  FieldTypeId: number
  FieldValueId: string | null
  Description: string
  IsStockKeepingUnit: boolean
  IsFilter: boolean
  IsOnProductDetails: boolean
  Position: number
  IsWizard: boolean
  IsTopMenuLinkActive: boolean
  IsSideMenuLinkActive: boolean
  DefaultValue: unknown
  FieldGroupId: number
  FieldGroupName: string
}

export interface CreateSpecificationFieldResponse
  extends CreateSpecificationFieldData {
  FieldId: number
}

export interface CreateCollectionData {
  Name: string
  Searchable: boolean
  Highlight: boolean
  DateFrom: string
  DateTo: string
}

export interface CreateCollectionResponse extends CreateCollectionData {
  Id: number
  Description: null
  TotalProducts: 0
  Type: 'Manual'
}

export interface CreateSubcollectionData {
  CollectionId: number
  Name: string
  Type: string
  PreSale: boolean
  Release: boolean
}

export interface CreateSubcollectionResponse extends CreateSubcollectionData {
  Id: number
}

export interface CreateBrandSubcollectionInput {
  subcollectionId: number
  data: CreateBrandSubcollectionData
}

export interface CreateBrandSubcollectionData {
  BrandId: number
}

export interface CreateBrandSubcollectionResponse
  extends CreateBrandSubcollectionData {
  SubCollectionId: number
}

export interface CreateSpecificationFieldValueData {
  IsActive: boolean
  FieldId: number
  Name: string
  Text: string
  Position: number
}

export interface CreateSpecificationFieldValueResponse
  extends CreateSpecificationFieldValueData {
  FieldValueId: number
}

export interface UpdateProductSpecificationPayload {
  Value: string[]
  Id?: number
  Name?: string
}
