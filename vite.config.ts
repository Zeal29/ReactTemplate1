import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import * as path from 'path';
const reactSvgPlugin = require('vite-plugin-react-svg');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactSvgPlugin({
      defaultExport: 'component',

      // Boolean flag to enable/disable SVGO
      svgo: true,
    }),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
