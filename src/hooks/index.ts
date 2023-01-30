import { useState } from 'react';
import { DataProvider, useNotify, useTheme } from 'react-admin';
import { dataProviderGraphql } from '../lib';
/* import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql'; */

export function useDataProvider(){
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null)
  const notify = useNotify()

  dataProviderGraphql
    .then(setDataProvider)
    .catch(error => notify(error.message, { type: 'error' }))

  return dataProvider
}

export function useColorMode(lightModeValue: any, darkModeValue?: any){
  const [{ palette }] = useTheme()

  return palette?.mode === 'dark' ? darkModeValue : lightModeValue
}

// TODO: Buscar como usar react admin queries para esto o RA o terminar de impletar esto

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
