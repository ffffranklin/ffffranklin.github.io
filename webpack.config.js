var path = require('path');
module.exports = {
  entry: path.join(__dirname, '/_es6/index.js'),
  output: {
    path: path.join(__dirname, '/js'),
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, '/_es6'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: []
};

