import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: '/Game-Dev-Portfolio-React/',
  plugins: [react({ include: /\.[jt]sx?$/ }), svgr()],
  build: {
    outDir: 'build'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
});