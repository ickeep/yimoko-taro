import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: false,
  build: {
    sourcemap: !process.env.VITE_WATCH,
    target: process.env.VITE_WATCH ? 'modules' : 'es2015',
    lib: {
      formats: ['cjs', 'es', 'umd'],
      entry: path.resolve(__dirname, `src/library.ts`),
      name: `YimokoTaro`,
      fileName: format => `yimoko-taro.${format}.js`,
    },
    watch: process.env.VITE_WATCH ? { buildDelay: 100 } : null,
    outDir: path.resolve(__dirname, `dist`),
    rollupOptions: {
      external: [
        'react',
        'react-is',
        'react-dom',
        'lodash-es',
        "classnames",
        '@formily/core',
        '@formily/reactive',
        '@formily/react',
        '@formily/reactive-react',
        "@yimoko/store",
        "@tarojs/taro",
        "@tarojs/components",
        "@nutui/icons-react-taro",
        "@nutui/nutui-react-taro",
      ],
      output: {
        globals: {
          react: 'React',
          'react-is': 'ReactIs',
          'react-dom': 'ReactDOM',
          'lodash-es': '_',
          '@formily/core': 'Formily.Core',
          '@formily/reactive-react': 'Formily.ReactiveReact',
          '@formily/react': 'Formily.React',
          '@formily/reactive': 'Formily.Reactive',
          "@yimoko/store": "YimokoStore",
          "classnames": "classnames",
          "@tarojs/taro": "Taro",
          "@tarojs/components": "TaroComponents",
          "@nutui/nutui-react-taro": "NutUI",
        },
      },
    },
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
    dts({
      entryRoot: path.resolve(__dirname, `src`),
      outDir: path.resolve(__dirname, `types`),
    }),
  ],
});

