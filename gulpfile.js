'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');
var eslint = require('gulp-eslint');

var jsFiles = [
  'gulpfile.js',
  '_gulp/**/*.js',
  '_es6/**/*.js',
  '_test/unit/es6/**/*.js'
];

gulp.task('default', ['lint', 'test']);

gulp.task('test', shell.task([
  'node node_modules/babel-tape-runner/bin/babel-tape-runner _test/**/*.js | faucet'
]));

gulp.task('build', ['test', 'jekyll:build', 'pack:build']);

gulp.task('pack:build', require('./_gulp/webpack').build);

gulp.task('pack:build-dev', require('./_gulp/webpack').buildDev);

gulp.task('pack:server', require('./_gulp/webpack').server);

gulp.task('serve', ['pack:server','jekyll:serve']);

gulp.task('jekyll:serve', shell.task([
  'jekyll serve -w --trace --drafts --config _config.yml,_config.dev.yml .'
]));

gulp.task('jekyll:build', shell.task([
  'jekyll build . --trace'
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
  'istanbul cover babel-tape-runner -- "_test/**/*.test.js"'
]));

gulp.task('codeclimate', ['cover'], shell.task([
  'codeclimate-test-reporter < coverage/lcov.info'
]));
