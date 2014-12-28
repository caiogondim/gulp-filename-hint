# Gulp filename hint [![Build Status](https://secure.travis-ci.org/caiogondim/gulp-filename-hint.svg)](https://travis-ci.org/caiogondim/gulp-filename-hint) <img src="https://david-dm.org/caiogondim/gulp-filename-hint.svg">

<img src="https://raw.githubusercontent.com/caiogondim/gulp-filename-hint/master/icon/icon.png" align="right" width="200" />

> Lint as a term can also refer more broadly to syntactic discrepancies in
> general, especially in interpreted languages like JavaScript and Python. For
> example, modern lint checkers are often used to find code that doesn't
> correspond to certain style guidelines. They can also be used as simple
> debuggers for common errors, or hard to find errors such as heisenbugs.

A gulp plugin for linting filenames.

## Install

```sh
npm install --save-dev gulp-filename-hint
```


## Usage

```js
var gulp = require('gulp');
var filenameHint = require('gulp-filename-hint');

gulp.task('test', function () {
  return gulp.src('src/*.js')
    .pipe(filenameHint());
});
```


## API

### filenameHint(options)

#### options.regExp

Type: `RegExp`

Default: `undefined`

Only RegExp's with begin (`^`) and end (`$`) boundaries should be used.

```js
gulp.task('test', function () {
  return gulp.src('src/*.js')
    .pipe(filenameHint({regExp: /^\w*$/}));
});
```

#### options.whiteList

Type: `Array`

Default: `[]`

An array with allowed filenames. All names here will be automatically
interpreted as valid ones.

```js
gulp.task('test', function () {
  return gulp.src('src/*.js')
    .pipe(filenameHint({
      regExp: /^\w*$/,
      whiteList: ['README.md']
    }));
});
```

## License
The MIT License (MIT)

Copyright (c) 2014 [Caio Gondim](http://caiogondim.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
