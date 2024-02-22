import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'public/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'es', // El formato 'es' mantiene el módulo ES en el bundle
  },
  plugins: [resolve()],
};
