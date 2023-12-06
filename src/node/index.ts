// Dependencies
import {
  Service,
  ServiceContext,
  RecorderState,
  ClientsConfig,
  ParamsContext,
  EventContext,
} from '@vtex/api'

// Typing
import { IPartner } from './typings/partner'
import {
  CreateProductResponse,
  CreateSKUResponse,
} from './clients/CatalogClient/types'
import type { ReadStream } from 'fs'

// Routes
import routes from './routes'

// Events
import events from './events'

// Resolvers
import resolvers from './resolvers'

// Clients
import { Clients } from './clients'

const TREE_SECONDS_MS = 60 * 1000

declare global {
  // The shape of our State object found in `ctx.state`.
  // This is used as state bag to communicate between middlewares.

  interface State extends RecorderState {
    account: string
    partner: Omit<IPartner, 'imgFile'> & { imgURL: string }
    product: CreateProductResponse
    sku: CreateSKUResponse
  }

  interface File {
    filename: string
    mimetype: string
    encoding: string
    createReadStream: (path: string | Buffer) => ReadStream
  }

  type CustomEventContext = EventContext<Clients, State>

  type Context = ServiceContext<Clients, State, ParamsContext>
}

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TREE_SECONDS_MS,
    },
  },
}

export default new Service<Clients, State, ParamsContext>({
  routes,
  events,
  clients,
  graphql: {
    resolvers,
  },
})
