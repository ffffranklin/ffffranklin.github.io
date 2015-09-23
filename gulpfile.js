'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var eslint = require('eslint');

gulp.task('default', ['test']);
gulp.task('test', function (cb) { cb(); });
gulp.task('pack:build', function (cb) { cb(); });
gulp.task('pack:build-dev', require('./gulp/webpack').buildDev);
gulp.task('pack:server', require('./gulp/webpack').server);
gulp.task('serve', ['pack:server','serve:jekyll']);
gulp.task('serve:jekyll', shell.task([
  'jekyll serve -w --config _config.yml,_config.dev.yml .'
]));
gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'site/es6/**/*.js', 'test/unit/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

