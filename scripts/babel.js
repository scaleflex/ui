const babelPluginJsxAddIconName = require('./babel-plugin-transform-react-jsx-add-icon-name');

const presets = {
  env: ['@babel/preset-env', { modules: false }],
  react: '@babel/preset-react',
};

const plugins = {
  styledComponents: ['styled-components', { displayName: false, fileName: false, pure: true }],
  runtime: '@babel/plugin-transform-runtime',
  classProperties: 'transform-class-properties',
};

const withConfig = (shouldUse, config) => (shouldUse ? [config] : []);

const applyConfigs = (object, options) => {
  return Object.keys(object).reduce((configs, key) => {
    return [...configs, ...withConfig(options[key], object[key])];
  }, []);
};

module.exports = (options = {}) => {
  const { styledComponents = true, react = true, env = true, runtime, classProperties, jsxAddIconName } = options;
  return {
    presets: [...applyConfigs(presets, { react, env }), '@babel/preset-typescript'],
    plugins: [
      ...applyConfigs(plugins, { styledComponents, runtime, classProperties }),
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ...(jsxAddIconName ? [[babelPluginJsxAddIconName]] : []),
    ],
    ignore: ['src/**/*.d.ts'],
  };
};
