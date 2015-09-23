var path = require('path');
module.exports = {
  entry: path.join(__dirname, '/site/_es6/index.js'),
  output: {
    path: path.join(__dirname, '/site/js'),
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:path.join(__dirname, '/site/_es6'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};

