'use strict';

var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');
var exports = module.exports = {};

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

exports.buildDev = function buildDev(cb) { 
  devCompiler.run(function(err, stats) {
    if (err) throw new gutil.PluginError("pack:build-dev", err);
    gutil.log("[pack:build-dev]", stats.toString({
      colors: true
    }));
    cb();
  });
};

exports.server = function server() {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(9876, "localhost", function(err) {
    if(err) throw new gutil.PluginError("pack:server", err);
    gutil.log("[pack:server]", "http://localhost:9876/webpack-dev-server/index.html");
  });

};
