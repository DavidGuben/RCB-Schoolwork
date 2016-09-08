module.exports = {
  entry: {
    app: __dirname + '/app'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: __dirname + '/app'
    }, {
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory'],
      include: __dirname + '/app'
    }]
  }
};
