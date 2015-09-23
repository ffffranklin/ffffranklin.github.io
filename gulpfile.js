'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('eslint');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');


var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task('default', ['test']);
gulp.task('test', function (cb) { cb(); });
gulp.task('pack:build', function (cb) { cb(); });
gulp.task('pack:build-dev', function (cb) { 
  devCompiler.run(function(err, stats) {
    if (err) throw new gutil.PluginError("pack:build-dev", err);
    gutil.log("[pack:build-dev]", stats.toString({
      colors: true
    }));
    cb();
  });
});
gulp.task('pack:server', function (cb) { cb(); });
gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'site/es6/**/*.js', 'test/unit/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

