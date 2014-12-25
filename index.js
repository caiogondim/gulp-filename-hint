'use strict';

var gulpUtil = require('gulp-util');
var through = require('through2');

function getFilename(file) {
  return file.path.split(file.base)[1]
}

function validateOpts(opts, cb) {

  if (JSON.stringify(opts) === JSON.stringify({})) {
    cb(new gulpUtil.PluginError(
      'gulp-filename-hint',
      'options must be declared'
    ));

    return false;
  }

  // Checks if `opts.whiteList` is an Array
  if (opts.whiteList !== undefined && opts.whiteList.constructor !== Array) {
    cb(new gulpUtil.PluginError(
      'gulp-filename-hint',
      'whiteList option must be an Array instance'
    ));

    return false;
  }

  // Checks if `opts.whiteList` is an Array of strings
  if (opts.whiteList !== undefined) {
    var isWhiteListAnArrayOfStrings = true;

    opts.whiteList.forEach(function(item) {
      if (item.constructor !== String) {
        cb(new gulpUtil.PluginError(
          'gulp-filename-hint',
          'whiteList option must be an Array of String'
        ));
        isWhiteListAnArrayOfStrings = false;
      }
    });

    if (!isWhiteListAnArrayOfStrings) {
      return false;
    }
  }

  // Checks if `opts.regExp` exists
  if (opts.regExp === undefined) {
    cb(new gulpUtil.PluginError(
      'gulp-filename-hint',
      'regExp option is required'
    ));

    return false;
  }

  // Checks if `opts.regExp` is a RegExp
  if (opts.regExp.constructor !== RegExp) {
    cb(new gulpUtil.PluginError(
      'gulp-filename-hint',
      'regExp option must be a RegExp instance'
    ));

    return false;
  }

  return true;
}

function isInWhiteList(filename, whiteList) {
  var index = whiteList.indexOf(filename);
  return (index >= 0 && filename === whiteList[index]);
}

module.exports = function(opts) {
  opts = opts || {};

  var stream = through.obj(function (file, enc, cb) {
    if (!validateOpts(opts, cb)) {
      return;
    }

    var filename = getFilename(file);

    if (opts.whiteList && isInWhiteList(filename, opts.whiteList)) {
      cb(null, file);
      return;
    }

    if (!opts.regExp.test(filename)) {
      this.emit('error', new gulpUtil.PluginError(
        'gulp-filename-hint',
        '“' + filename + '” is not a valid filename based on passed RegExp'
      ));
    }

    cb(null, file);
  });

  return stream;
}
