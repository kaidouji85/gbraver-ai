module.exports = {
  entry: `${__dirname}/front-end/index.js`,
  output: {
    path: `${__dirname}/server-side/public/javascripts`,
    filename: `bundle.js`
  },
  devtool: 'source-map'
};