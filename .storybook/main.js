import { dirname, join } from "path";
const pathsToWebpackAlias = require('../scripts/paths-to-webpack-alias');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },
  stories: [
    {
      directory: '../packages/ui/stories',
    },
  ],

  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      baskgrounds: false,
      actions: false,
    },
  },
  //  getAbsolutePath("storybook-addon-jsx"),
  //  getAbsolutePath("storybook-addon-breakpoints"), 
   getAbsolutePath("@storybook/addon-docs"), 
   '@storybook/addon-webpack5-compiler-babel'],

  webpackFinal: async (config) => {
    config.module.rules.find((rule) => rule.test.test('.svg')).exclude = /\.inline.svg$/;
   
    config.module.rules.push(
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

    config.resolve.extensions.push('.ts', '.tsx', '.jsx');

    config.resolve.modules = ['node_modules'];

    // config.plugins.push(new BundleAnalyzerPlugin());

    Object.assign(config.resolve.alias, pathsToWebpackAlias());

    return config;
  },


  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
