import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      values: {
        '@/': './src/',
      },
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2015,
        keep_fargs: false,
        passes: 2,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_symbols: true,
        unsafe_undefined: true,
      },
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
}
