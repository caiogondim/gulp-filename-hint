/* jshint node: true */
/* global it */

'use strict';

var gulp = require('gulp');
var assert = require('assert');
var filenameHint = require('../');

it('should throw an error if `options` are not declared', function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint());

  stream.on('error', function(error) {
    assert(error.message === 'options must be declared');
    done();
  });
});

it('should throw an error if `options.whiteList` ' + 
   'is defined and is not an Array', 
   function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint({
      whiteList: 'readme.md', 
      regExp: /^[a-zA-Z0-9_.]*$/
    }));
  
  stream.on('error', function(error) {
    assert(error.message === 'whiteList option must be an Array instance');
    done();
  })
});

it('should throw an error if `options.whiteList` has any non-String item', 
   function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint({
      whiteList: ['lorem.txt', 1, 'ipsum.txt'], 
      regExp: /^[a-zA-Z0-9_.]*$/
    }));

    stream.on('error', function(error) {
      assert(error.message === 'whiteList option must be an Array of String');
      done();
    });
});

it('should throw an error if `options.regExp` is not defined', 
   function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint({
      whiteList: ['lorem.txt', 'ipsum.txt']
    }));

    stream.on('error', function(error) {
      assert(error.message === 'regExp option is required');
      done();
    });
});

it('should throw an error if `options.regExp` is not a RegExp', 
   function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint({
      whiteList: ['lorem.txt', 'ipsum.txt'], 
      regExp: 'lorem'
    }));

    stream.on('error', function(error) {
      assert(error.message === 'regExp option must be a RegExp instance');
      done();
    })
});

it('should not accept filenames that does not match with `options.regExp`', 
   function(done) {
  var stream = gulp.src('test/files/**/*.*')
    .pipe(filenameHint({
      whiteList: ['lorem.txt', 'ipsum.txt'], 
      regExp: /^[a-zA-Z0-9_.]*$/
    }));

    stream.on('error', function(error) {
      assert(error
        .message
        .indexOf('is not a valid filename based on passed RegExp') >= 0
      );
      done();
    })
});

it('should ignore files in `options.whiteList` even if they don\'t match ' + 
   'with `options.regExp`', 
   function(done) {
  gulp.task('task1', function() {
    return gulp.src('test/files/**/*.*')
      .pipe(filenameHint({
        whiteList: ['123.js'], 
        regExp: /^[a-zA-Z_.\-]*$/
      }));
  });

  gulp.task('task2', ['task1'], function() {
    done();
  });

  gulp.start('task2');
});
