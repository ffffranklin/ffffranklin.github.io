'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['test']);
gulp.task('test', function (cb) { cb(); });
gulp.task('pack:build', function (cb) { cb(); });
gulp.task('pack:build-dev', function (cb) { cb(); });
gulp.task('pack:server', function (cb) { cb(); });

