require (`@babel/register`) ({
  extensions: [`.ts`],
  cache: false,
  configFile: `./.babelrc.js`,
  retainLines: true,
  sourceMaps: `both`,
})