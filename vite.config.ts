import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dear-Dallas-Frontend/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
