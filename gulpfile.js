'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('eslint');

gulp.task('default', ['test']);
gulp.task('test', function (cb) { cb(); });
gulp.task('pack:build', function (cb) { cb(); });
gulp.task('pack:build-dev', require('./gulp/webpack').buildDev);
gulp.task('pack:server', function (cb) { cb(); });
gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'site/es6/**/*.js', 'test/unit/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

