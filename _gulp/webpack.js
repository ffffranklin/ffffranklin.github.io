'use strict';

var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');
var exports = module.exports = {};

var myDevConfig = Object.create(webpackConfig);

myDevConfig.devtool = "source-map";
// @todo https://webpack.js.org/migrate/3/#debug
// myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

exports.buildDev = function buildDev(cb) {
  devCompiler.run(function(err, stats) {
    if (err) {throw new gutil.PluginError("pack:build-dev", err);}
    gutil.log("[pack:build-dev]", stats.toString({
      colors: true
    }));
    cb();
  });
};

exports.build = function build(cb) {
  // modify some webpack config options
  var config = Object.create(webpackConfig);

  config.plugins = config.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(config, function(err, stats) {
    if(err) {throw new gutil.PluginError("pack:build", err);}
    gutil.log("[pack:build]", stats.toString({
      colors: true
    }));
    cb();
  });

};

exports.server = function server() {
  // modify some webpack config options
  var config = Object.create(webpackConfig);

  config.devtool = "eval";
  // @todo https://webpack.js.org/migrate/3/#debug
  // config.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(config), {
    publicPath: "/" + config.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(9876, "localhost", function(err) {
    if(err) {throw new gutil.PluginError("pack:server", err);}
    gutil.log("[pack:server]", "http://localhost:9876/webpack-dev-server/index.html");
  });

};
