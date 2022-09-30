const pathsToWebpackAlias = require('../scripts/paths-to-webpack-alias');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: ['../packages/**/*.story.@(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        baskgrounds: false,
        actions: false,
      },
    },
    'storybook-addon-jsx',
    'storybook-addon-breakpoints',
    '@storybook/addon-docs'
  ],
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
};
