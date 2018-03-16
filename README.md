# gulp-filename-hint

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

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
