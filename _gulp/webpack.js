'use strict';

const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
/* eslint-disable no-var */
var exports = module.exports = {};

const myDevConfig = Object.create(webpackConfig);

myDevConfig.devtool = 'source-map';
// @todo https://webpack.js.org/migrate/3/#debug
// myDevConfig.debug = true;

const devCompiler = webpack(myDevConfig);

exports.buildDev = function buildDev(cb) {
  devCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('pack:build-dev', err);
    }
    gutil.log('[pack:build-dev]', stats.toString({
      colors: true,
    }));
    cb();
  });
};

exports.build = function build(cb) {
  // modify some webpack config options
  const config = Object.create(webpackConfig);

  config.plugins = config.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('pack:build', err);
    }
    gutil.log('[pack:build]', stats.toString({
      colors: true,
    }));
    cb();
  });
};

exports.server = function server() {
  // modify some webpack config options
  const config = Object.create(webpackConfig);

  config.devtool = 'eval';
  // @todo https://webpack.js.org/migrate/3/#debug
  // config.debug = true;

  const server = new WebpackDevServer({}, webpack(config));

  // Start a webpack-dev-server
  server.start(9876, 'localhost', function(err) {
    if (err) {
      throw new gutil.PluginError('pack:server', err);
    }
    gutil.log('[pack:server]', 'http://localhost:9876/webpack-dev-server/index.html');
  });
};
