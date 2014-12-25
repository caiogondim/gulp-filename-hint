/* jshint node: true */

'use strict'

var runSequence = require('run-sequence')
var gulp = require('gulp')
var jshint = require('gulp-jshint')
var jscs = require('gulp-jscs')
var mocha = require('gulp-mocha')

gulp.task('jshint', function() {
  return gulp.src(['index.js', 'test/index.js', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
})

gulp.task('jscs', function() {
  return gulp.src(['index.js', 'test/index.js', 'gulpfile.js'])
    .pipe(jscs({configPath: '.jscsrc'}))
})

gulp.task('mocha', function() {
  return gulp.src('test/index.js')
    .pipe(mocha())
})

gulp.task('test', function() {
  runSequence(['jshint', 'jscs'], 'mocha')
})
