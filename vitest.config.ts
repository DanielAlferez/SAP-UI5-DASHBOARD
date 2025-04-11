import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/vitest.setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    alias: {
      "@": "/src"
    },
  },
});
