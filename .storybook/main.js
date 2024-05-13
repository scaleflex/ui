import { dirname, join } from 'path';
const pathsToWebpackAlias = require('../scripts/paths-to-webpack-alias');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  framework: getAbsolutePath('@storybook/react-webpack5'),
  stories: ['../packages/**/*.@(stories.@(tsx|ts))'],
  addons: [
    { name: '@storybook/addon-essentials', options: { backgrounds: false, actions: false } },
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-mdx-gfm',
  ],

  webpackFinal: async (webpackConfig) => {
    webpackConfig.module.rules.find((rule) => rule.test.test('.svg')).exclude = /\.inline.svg$/;

    webpackConfig.module.rules.push(
      {
        test: /\.(ts|tsx|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.inline.svg$/,
        loader: require.resolve('@svgr/webpack'),
      }
    );

    webpackConfig.resolve.extensions.push('.ts', '.tsx', '.jsx');

    webpackConfig.resolve.modules = ['node_modules'];

    // webpackConfig.plugins.push(new BundleAnalyzerPlugin());

    Object.assign(webpackConfig.resolve.alias, pathsToWebpackAlias());

    return webpackConfig;
  },
};

export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
