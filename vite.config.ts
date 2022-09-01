import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import environmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  plugins: [react(), tsconfigPaths(), environmentPlugin('all')],
});
