'use strict';

var gulp = require('gulp');
var filenameHint = require('../index');

gulp.src('test/files/*')
  .pipe(filenameHint({regExp: /^[a-zA-Z0-9_.]*$/}));
