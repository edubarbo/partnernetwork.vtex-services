import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: '/_v/public/graphql/v1',
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
