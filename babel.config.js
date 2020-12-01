module.exports = {
  ...require('./scripts/babel')({
    runtime: true,
  }),
  babelrcRoots: ['.', 'packages/{core,icons,theme,utils}'],
};
