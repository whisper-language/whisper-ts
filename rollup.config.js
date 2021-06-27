const rollup = require('rollup');
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output:{
      file: 'dest/bundle.js',
      format: 'umd',
      name:"trifoliate"
  },
  plugins: [
    resolve(),
    typescript(),
    babel({ babelHelpers: 'bundled' })
  ]
};