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
}
