import { useState } from 'react';
import { DataProvider } from 'react-admin';
import { dataProviderGraphql } from '../lib';
/* import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql'; */

export function useDataProvider(){
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null)

  dataProviderGraphql
    .then(setDataProvider)
    .catch(console.error)

  return dataProvider
}

/*
export function useLoginAuth(id: string){

  const {data, loading, error} = useQuery(GET_USER as DocumentNode, {
    variables:{
      id,
    },
  })

  return {data, loading, error}
}
 */
