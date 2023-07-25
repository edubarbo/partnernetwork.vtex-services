// Resolvers
import { partner } from './partner'
import { partnersWithPaginationInfo } from './partnersWithPaginationInfo'
import { savePartner } from './savePartner'

import { service } from './service'
import { services } from './services'
import { createService } from './createService'
import { updateService } from './updateService'
import { saveServices } from './saveServices'

import { client } from './client'
import { clients } from './clients'
import { createClient } from './createClient'
import { updateClient } from './updateClient'
import { saveClients } from './saveClients'

export default {
  Mutation: {
    savePartner,
    createService,
    updateService,
    saveServices,
    createClient,
    updateClient,
    saveClients,
  },
  Query: {
    partner,
    partnersWithPaginationInfo,
    service,
    services,
    client,
    clients,
  },
}
