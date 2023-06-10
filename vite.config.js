import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  // base: './',
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: 'es',
      fileName: 'index.js'
    },
    outDir: 'build',
    manifest: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        index: './src/index.tsx', // Path to your main entry file
      },
      output: {
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: {},
      },
    },
    minify: 'esbuild',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
