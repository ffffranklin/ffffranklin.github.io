'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var eslint = require('gulp-eslint');

var jsFiles = [
  'gulpfile.js',
  'gulp/**/*.js',
  'site/es6/**/*.js',
  'test/unit/es6/**/*.js'
];

gulp.task('default', ['lint', 'test']);

gulp.task('test', shell.task([
  'node node_modules/babel-tape-runner/bin/babel-tape-runner test/**/*.js | faucet'
]));

gulp.task('build', ['pack:build']);

gulp.task('pack:build', require('./gulp/webpack').build);

gulp.task('pack:build-dev', require('./gulp/webpack').buildDev);

gulp.task('pack:server', require('./gulp/webpack').server);

gulp.task('serve', ['pack:server','serve:jekyll']);

gulp.task('serve:jekyll', shell.task([
  'jekyll serve -w --config _config.yml,_config.dev.yml .'
]));

gulp.task('lint', function () {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', ['lint', 'test'], function() {
  gulp.watch(jsFiles, ['lint', 'test']);
});

gulp.task('cover', shell.task([
  'istanbul cover babel-tape-runner -- "test/**/*.test.js"'
]));

gulp.task('codeclimate', ['cover'], shell.task([
  'codeclimate-test-reporter < coverage/lcov.info'
]));



