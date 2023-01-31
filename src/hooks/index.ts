import { useState } from 'react';
import { DataProvider, useNotify, useTheme } from 'react-admin';
import { dataProviderGraphql } from '../lib';

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

