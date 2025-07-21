import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem';
import {resolve} from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
          unitPrecision: 3,
          propList: ['*']
        })
      ]
    }
  }
})
