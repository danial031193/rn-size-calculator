/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
            },
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
    alias: {
      '@assets': path.resolve(__dirname, '../../src/renderer/assets'),
      '@common': path.resolve(__dirname, '../../src/renderer/common'),
      '@wrappers': path.resolve(__dirname, '../../src/renderer/common/wrappers'),
      '@helpers': path.resolve(__dirname, '../../src/renderer/common/helpers'),
      '@hooks': path.resolve(__dirname, '../../src/renderer/common/hooks'),
      '@components': path.resolve(__dirname, '../../src/renderer/common/components'),
      '@services': path.resolve(__dirname, '../../src/renderer/common/services'),
      '@constants': path.resolve(__dirname, '../../src/renderer/constants'),
      '@interfaces': path.resolve(__dirname, '../../src/renderer/interfaces'),
      '@pages': path.resolve(__dirname, '../../src/renderer/pages'),
      '@store': path.resolve(__dirname, '../../src/renderer/store'),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};

export default configuration;
