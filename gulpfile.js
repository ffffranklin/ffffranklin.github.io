'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var eslint = require('gulp-eslint');
var gulpIf = require('gulp-if');

var jsFiles = [
  'gulpfile.js',
  '_gulp/**/*.js',
  '_es6/**/*.js',
  '_test/unit/es6/**/*.js'
];

function isFixed(file) {
  // Has ESLint fixed the file contents?
  return file.eslint != null && file.eslint.fixed;
}

gulp.task('test', shell.task([
  'node node_modules/babel-tape-runner/bin/babel-tape-runner _test/**/*.js' +
  ' | faucet'
]));

gulp.task('pack:build', require('./_gulp/webpack').build);

gulp.task('pack:build-dev', require('./_gulp/webpack').buildDev);

gulp.task('pack:server', require('./_gulp/webpack').server);

gulp.task('jekyll:serve', shell.task([
  'jekyll serve -w --trace --drafts --config _config.yml,_config.dev.yml .'
]));

gulp.task('jekyll:build', shell.task([
  'jekyll build . --trace --safe'
]));

gulp.task('lint', function() {
  return gulp.src(jsFiles).
    pipe(eslint()).
    pipe(eslint.format()).
    pipe(eslint.failAfterError());
});

gulp.task('lint:fix', function() {
  return gulp.src(jsFiles,  {base: "./"}).
    pipe(eslint({fix: true})).
    pipe(eslint.format()).
    // if fixed, write the file to dest
    pipe(gulpIf(isFixed, gulp.dest('./')));
});

gulp.task('serve', gulp.parallel('pack:server','jekyll:serve'));

gulp.task('build', gulp.series('test', 'jekyll:build', 'pack:build'));

gulp.task('default', gulp.series('lint', 'test'));

gulp.task('watch', gulp.series('lint', 'test', function() {
  gulp.watch(jsFiles, ['lint', 'test']);
}));
