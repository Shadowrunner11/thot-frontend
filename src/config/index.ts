import { cleanPojoMutable } from '../utils'

interface IEnpoints {
  thotBackendGraph: string
}

// TODO: I think this should come from a DataBase as config, even if its static
// genereted or myabe ask for configuration to a KMS?

const endpoints = {
  development:{
    thotBackendGraph: 'https://thotgraphql.dev.com',
  },
  production:{
    thotBackendGraph: 'https://thotgraphql.com',
  },
  test:{
    thotBackendGraph: 'http://localhost:5000',
  },
}

const currentMode = import.meta.env.MODE as keyof typeof endpoints

const localConfig = cleanPojoMutable<string>({
  thotBackendGraph: import.meta.env.VITE_THOT_GRAPHQL,
})


export const currentEndpoints: IEnpoints = {
  ...endpoints[currentMode],
  ...localConfig,
}

