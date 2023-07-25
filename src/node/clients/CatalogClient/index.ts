import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

import { returnDataIfConflictOrThrow } from '../../utils/errors'
import type {
  CreateCategoryResponse,
  CreateSKUData,
  CreateSKUSpecificationResponse,
  AssociateSKUAttachmentData,
  AssociateSKUAttachmentResponse,
  CreateSKUSpecificationData,
  GetSpecificationsByCategoryIdResponse,
  CreateAttachmentData,
  CreateAttachmentResponse,
  CreateProductData,
  CreateProductResponse,
  CreateSKUFileData,
  CreateSKUFileResponse,
  CreateSKUResponse,
  CreateBrandData,
  CreateBrandResponse,
  CreateCategoryData,
  CreateSpecificationGroupData,
  CreateSpecificationGroupResponse,
  CreateSpecificationFieldData,
  CreateSpecificationFieldResponse,
  CreateCollectionData,
  CreateCollectionResponse,
  CreateSubcollectionData,
  CreateSubcollectionResponse,
  CreateBrandSubcollectionResponse,
  CreateBrandSubcollectionInput,
  CreateSpecificationFieldValueData,
  CreateSpecificationFieldValueResponse,
  GetSpecificationFieldValuesByFieldIdResponse,
  GetProductByRefIdResponse,
  UpdateProductSpecificationPayload,
} from './types'

export default class CatalogClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...(options ?? {}),
      headers: {
        ...(options?.headers ?? {}),
        Accept: 'application/json',
        'Cache-Control': 'no-store, max-age=0',
        'Content-Type': 'application/json',
        VtexIdclientAutCookie: context.authToken,
        'X-Vtex-Use-Https': 'true',
      },
    })
  }

  public getSpecificationsByCategoryId = (id: string | number) =>
    this.http.get<GetSpecificationsByCategoryIdResponse[]>(
      `/api/catalog_system/pub/specification/field/listTreeByCategoryId/${id}`,
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    )

  public getSpecificationsValuesByFieldId = (id: string | number) =>
    this.http.get<GetSpecificationFieldValuesByFieldIdResponse[]>(
      `/api/catalog_system/pub/specification/fieldvalue/${id}`,
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    )

  public createSKUSpecification = (
    id: string | number,
    data: CreateSKUSpecificationData
  ) =>
    this.http.post<CreateSKUSpecificationResponse>(
      `/api/catalog/pvt/stockkeepingunit/${id}/specification`,
      data
    )

  public getBrand = (id: number) =>
    this.http.get<CreateBrandResponse>(`/api/catalog_system/pvt/brand/${id}`)

  public createBrand = (data: CreateBrandData) =>
    this.http.post<CreateBrandResponse>('/api/catalog/pvt/brand', data)

  public getCollection = (id: number) =>
    this.http.get<CreateCollectionResponse>(`/api/catalog/pvt/collection/${id}`)

  public createCollection = (data: CreateCollectionData) =>
    this.http.post<CreateCollectionResponse>(
      '/api/catalog/pvt/collection',
      data
    )

  public getSubcollection = (id: number) =>
    this.http.get<CreateSubcollectionResponse>(
      `/api/catalog/pvt/subcollection/${id}`
    )

  public createSubcollection = (data: CreateSubcollectionData) =>
    this.http.post<CreateSubcollectionResponse>(
      '/api/catalog/pvt/subcollection',
      data
    )

  public createBrandSubcollection = ({
    subcollectionId,
    data,
  }: CreateBrandSubcollectionInput) =>
    this.http.post<CreateBrandSubcollectionResponse>(
      `/api/catalog/pvt/subcollection/${subcollectionId}/brand`,
      data
    )

  public getCategory = (categoryId: number) =>
    this.http.get<CreateCategoryResponse>(
      `/api/catalog/pvt/category${categoryId}`
    )

  public createCategory = (data: CreateCategoryData) =>
    this.http.post<CreateCategoryResponse>(`/api/catalog/pvt/category`, data)

  public createSpecificationGroup = (data: CreateSpecificationGroupData) =>
    this.http.post<CreateSpecificationGroupResponse>(
      '/api/catalog_system/pvt/specification/group',
      data
    )

  public createSpecificationField = (data: CreateSpecificationFieldData) =>
    this.http
      .post<string>('/api/catalog_system/pvt/specification/field', data)
      .then<CreateSpecificationFieldResponse>((FieldId) => ({
        ...data,
        FieldId: Number(FieldId),
      }))

  public createSpecificationFieldValue = (
    data: CreateSpecificationFieldValueData
  ) =>
    this.http.post<CreateSpecificationFieldValueResponse>(
      '/api/catalog_system/pvt/specification/fieldValue',
      data
    )

  public getProductByRefId = (refId: string) =>
    this.http.get<GetProductByRefIdResponse>(
      `/api/catalog_system/pvt/products/productgetbyrefid/${refId}`
    )

  public createProduct = (data: CreateProductData) =>
    this.http.post<CreateProductResponse>('/api/catalog/pvt/product', data)

  public updateProductById = (
    productId: CreateProductResponse['Id'],
    data: CreateProductData
  ) =>
    this.http.put<CreateProductResponse>(
      `/api/catalog/pvt/product/${productId}`,
      data
    )

  public createProductToTradePolicy = (productId: string | number) =>
    this.http.post(`/api/catalog/pvt/product/${productId}/salespolicy/1`)

  public createSKU = (data: CreateSKUData) =>
    this.http.post<CreateSKUResponse>('/api/catalog/pvt/stockkeepingunit', data)

  public getSKUIdByRefId = (refId: string) =>
    this.http.get<string>(
      `/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`
    )

  public getSKUByRefId = (refId: string) =>
    this.http.get<CreateSKUResponse>(
      `/api/catalog/pvt/stockkeepingunit?refId=${refId}`
    )

  public updateSKU = ({ Id: skuId, ...data }: CreateSKUResponse) =>
    this.http.put<CreateSKUResponse>(
      `/api/catalog/pvt/stockkeepingunit/${skuId}`,
      {
        ...data,
        IsActive: true,
        ActivateIfPossible: true,
      }
    )

  public createSKUFile = (skuId: string | number, data: CreateSKUFileData) =>
    this.http.post<CreateSKUFileResponse>(
      `/api/catalog/pvt/stockkeepingunit/${skuId}/file`,
      data
    )

  public getSKUFile = (skuId: string | number) =>
    this.http.get<CreateSKUFileResponse[]>(
      `/api/catalog/pvt/stockkeepingunit/${skuId}/file`
    )

  public updateSKUFile = (
    skuId: string | number,
    skuFileId: string | number,
    data: CreateSKUFileData
  ) =>
    this.http.put<CreateSKUFileResponse>(
      `/api/catalog/pvt/stockkeepingunit/${skuId}/file/${skuFileId}`,
      data
    )

  public setSkuSubscription = (data: AssociateSKUAttachmentData) =>
    this.post<AssociateSKUAttachmentResponse, AssociateSKUAttachmentData>(
      '/api/catalog/pvt/skuattachment',
      data
    )

  public createAttachment = (data: CreateAttachmentData) =>
    this.post<CreateAttachmentResponse, CreateAttachmentData>(
      `/api/catalog/pvt/attachment`,
      data
    )

  public getProductSpecification = (id: string | number) =>
    this.http.get(`/api/catalog_system/pvt/products/${id}/specification`)

  public updateProductSpecification = (
    productId: string | number,
    data: UpdateProductSpecificationPayload[]
  ) =>
    this.http.post<UpdateProductSpecificationPayload[]>(
      `/api/catalog_system/pvt/products/${productId}/specification`,
      data
    )

  private post = <TRes, Tdata>(
    url: string,
    data: Tdata,
    options?: InstanceOptions
  ) =>
    this.http
      .post<TRes>(url, data, options)
      .catch<Tdata>(returnDataIfConflictOrThrow(data))
}
