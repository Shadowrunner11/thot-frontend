import { ApolloClient, InMemoryCache } from '@apollo/client';

import { currentEndpoints } from '../config'

export default new ApolloClient({
  uri: currentEndpoints.thotBackendGraph,
  cache: new InMemoryCache(),
});

