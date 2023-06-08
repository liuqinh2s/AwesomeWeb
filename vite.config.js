import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  base: './',
  build: {
    outDir: 'build',
    manifest: true,
    target: 'es2016',
    rollupOptions: {
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
