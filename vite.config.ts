import { 
  defineConfig,
  /* splitVendorChunkPlugin */
} from 'vite'
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'

const reactDeps = Object
  .keys(dependencies)
  .filter(key => 
    ['react', 'react-router-dom', 'react-dom'].includes(key)
    /* key === 'react' || key.includes('react-') */
  )

const manualChunks = {
  vendor: reactDeps,
  ...Object.keys(dependencies).reduce((chunks: any, name) => {
    if (!reactDeps.includes(name)) {
      chunks[name] = [name]
    }
    return chunks
  }, {}),
}

const isGithubActions = process.env.GITHUB_ACTIONS
// https://vitejs.dev/config/
export default defineConfig({
  ...( isGithubActions ? { base: '/'} : {}),
  plugins: [react(), /* splitVendorChunkPlugin() ** , chunkSplitPlugin() */ ],
  build:{
    rollupOptions:{
     /*  plugins:[nodeResolve()] */
      output:{
        manualChunks
      }
    }
  }
})
