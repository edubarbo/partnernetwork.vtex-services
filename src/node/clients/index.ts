// Dependencies
import { IOClients } from '@vtex/api'

// Clients
import { Search } from '@vtex/clients'
import CatalogClient from './CatalogClient'
import MasterDataV1 from './MasterDataV1'
import PricingClient from './PricingClient'
import MessageCenterClient from './MessageCenterClient'

export class Clients extends IOClients {
  public get search() {
    return this.getOrSet('search', Search)
  }

  public get catalog() {
    return this.getOrSet('catalog', CatalogClient)
  }

  public get masterDataV1() {
    return this.getOrSet('masterDataV1', MasterDataV1)
  }

  public get pricingClient() {
    return this.getOrSet('pricingClient', PricingClient)
  }

  public get messageCenterClient() {
    return this.getOrSet('messageCenterClient', MessageCenterClient)
  }
}
