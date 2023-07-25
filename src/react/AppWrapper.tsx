// Style
import './styles.global.css'

// Dependencies
import React from 'react'
import { Layout, PageHeader } from 'vtex.styleguide'
import { ApolloProvider } from '@apollo/client'

// Apollo Client
import { client } from './apolloClient'

interface IndexAppProps {
  title: string
  linkLabel?: string
  onLinkClick?(event: MouseEvent): void
}

const IndexApp: React.FC<IndexAppProps> = ({
  title,
  children,
  linkLabel,
  onLinkClick,
}) => (
  <ApolloProvider client={client}>
    <Layout
      pageHeader={
        <PageHeader
          title={title}
          linkLabel={linkLabel}
          onLinkClick={onLinkClick}
        />
      }
    >
      {children}
    </Layout>
  </ApolloProvider>
)

export default IndexApp
