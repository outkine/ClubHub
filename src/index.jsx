import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import Router from './navigation'
import 'shared/style/globals'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj862e74i01cf0112ti8ts1sk'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('app')
)
