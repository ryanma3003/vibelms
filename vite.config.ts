import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Main chunk carries the full bilingual course text (~390 KB source);
    // the Three.js mascot chunk is lazy-loaded. Both are expected to exceed 500 KB.
    chunkSizeWarningLimit: 900,
  },
})
