'use strict'

const gulp = require('gulp');
const path = require('path');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');
const livereload = require('gulp-livereload');

function onError(error) {
  gutil.log(error.message)
  this.emit('end')
}

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|nunjucks)')
  .pipe(plumber({errorHandler: onError}))
  .pipe(data(function() {
    return require('./data.json');
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('.'))
  .pipe(livereload());
});


gulp.task('watch', () => {
  livereload.listen();
  gulp.watch([
    path.join('templates', '**', '*.+(html|nunjucks)'),
    path.join('pages', '**', '*.+(html|nunjucks)'),
    'data.json'
  ],
    ['nunjucks'])
})

gulp.task('start', ['watch'])
