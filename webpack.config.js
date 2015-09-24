var path = require('path');
module.exports = {
  entry: path.join(__dirname, '/_es6/index.js'),
  output: {
    path: path.join(__dirname, '/js'),
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:path.join(__dirname, '/_es6'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};

