module.exports = {
  ...require('./scripts/babel')({
    runtime: true,
  }),
  babelrcRoots: ['.', 'packages/{ui,icons}'],
};
