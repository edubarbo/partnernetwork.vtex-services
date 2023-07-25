export interface IMasterDataInitialFields {
  id: string
  accountId: string
  accountName?: string
  dataEntityId: string
  createdBy: string
  createdIn: Date
  updatedBy?: string
  updatedIn?: Date
  lastInteractionBy: string
  lastInteractionIn: Date
  followers: unknown[]
  tags: unknown[]
  // eslint-disable-next-line camelcase
  auto_filter?: unknown | null
}
