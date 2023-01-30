import { ApolloClient, InMemoryCache } from '@apollo/client';

import { currentEndpoints } from '../config'

export default new ApolloClient({
  cache: new InMemoryCache(),
  uri: currentEndpoints.thotBackendGraph,
});

