import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
          icons: ['phosphor-react', 'lucide-react'],
          routing: ['react-router-dom'],
        }
      }
    },
    // Enable minification
    minify: 'esbuild',
    // Optimize CSS
    cssMinify: true,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    // Pre-bundle dependencies
    include: [
      'react', 
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'phosphor-react',
      'lucide-react'
    ],
  },
}));
