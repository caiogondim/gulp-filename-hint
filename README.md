# Gulp filename hint

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


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

#### options.wordSeparator

Type: `String`

Default: `'_'`

#### options.case

Type: `String`

Default: `'lower'`

Values: `'upper', 'lower', 'mixed'`

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
