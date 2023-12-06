export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  IOSanitizedString: any;
  IOUpload: any;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Client = {
  __typename?: 'Client';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  partnerID?: Maybe<Scalars['ID']>;
  imgURL?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
};

export type ClientInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  imgFile?: Maybe<Scalars['Upload']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  savePartner?: Maybe<Partner>;
  createService?: Maybe<Service>;
  updateService?: Maybe<Service>;
  saveServices?: Maybe<Array<Maybe<Service>>>;
  createClient?: Maybe<Client>;
  updateClient?: Maybe<Client>;
  saveClients?: Maybe<Array<Maybe<Client>>>;
};


export type MutationSavePartnerArgs = {
  input?: Maybe<PartnerInput>;
};


export type MutationCreateServiceArgs = {
  partnerID?: Maybe<Scalars['ID']>;
  input?: Maybe<ServiceInput>;
};


export type MutationUpdateServiceArgs = {
  id?: Maybe<Scalars['ID']>;
  input?: Maybe<ServiceInput>;
};


export type MutationSaveServicesArgs = {
  partnerID?: Maybe<Scalars['ID']>;
  services?: Maybe<Array<ServiceInput>>;
};


export type MutationCreateClientArgs = {
  partnerID?: Maybe<Scalars['ID']>;
  input?: Maybe<ClientInput>;
};


export type MutationUpdateClientArgs = {
  id?: Maybe<Scalars['ID']>;
  input?: Maybe<ClientInput>;
};


export type MutationSaveClientsArgs = {
  partnerID?: Maybe<Scalars['ID']>;
  clients?: Maybe<Array<ClientInput>>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  page?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type Partner = {
  __typename?: 'Partner';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  imgURL?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  types: Array<Scalars['String']>;
  regions: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Category>>;
  subcategories?: Maybe<Array<Subcategories>>;
};

export type PartnerInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  imgFile?: Maybe<Scalars['Upload']>;
  account?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Scalars['String']>>;
  regions?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<CategoryInput>>;
  subcategories?: Maybe<Array<SubcategoriesInput>>;
};

export type PartnersWithPaginationInfo = {
  __typename?: 'PartnersWithPaginationInfo';
  partners?: Maybe<Array<Maybe<Partner>>>;
  pagination?: Maybe<PaginationInfo>;
};

export type Query = {
  __typename?: 'Query';
  partner?: Maybe<Partner>;
  partnersWithPaginationInfo?: Maybe<PartnersWithPaginationInfo>;
  service?: Maybe<Service>;
  services?: Maybe<Array<Maybe<Service>>>;
  client?: Maybe<Client>;
  clients?: Maybe<Array<Maybe<Client>>>;
};


export type QueryPartnerArgs = {
  account?: Maybe<Scalars['String']>;
};


export type QueryPartnersWithPaginationInfoArgs = {
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  status: Status;
};


export type QueryServiceArgs = {
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryServicesArgs = {
  partnerID?: Maybe<Scalars['ID']>;
};


export type QueryClientArgs = {
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryClientsArgs = {
  partnerID?: Maybe<Scalars['ID']>;
};

export type Service = {
  __typename?: 'Service';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  partnerID?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

export type ServiceInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isRemoved?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

export type Status = 
  | 'PENDING'
  | 'DENIED'
  | 'PROCESSING'
  | 'APPROVED';

export type Subcategories = {
  __typename?: 'Subcategories';
  categoryID?: Maybe<Scalars['ID']>;
  subcategories?: Maybe<Array<Maybe<Category>>>;
};

export type SubcategoriesInput = {
  categoryID?: Maybe<Scalars['ID']>;
  subcategories?: Maybe<Array<Maybe<CategoryInput>>>;
};


export {}