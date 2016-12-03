var gulp = require('gulp');
var bs = require('browser-sync').create();
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var stripCssComments = require('gulp-strip-css-comments');
var removeEmptyLines = require('gulp-remove-empty-lines');

function swallowError(error) {
  console.log('there is an error');
  console.log(error.toString());
  this.emit('end');
}

gulp.task('browser-sync', function() {
  bs.init({
    server : {
      baseDir : "./"
    }
  });
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS dist.
 |--------------------------------------------------------------------------
 */

gulp.task('build-fuku', function() {
  return gulp.src([
    'less/fuku/fuku.less'
  ])
    .pipe(plumber())
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer())
    .pipe(stripCssComments())
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('styles'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('build-bootstrap', function() {
  return gulp.src([
    'less/bootstrap/grid.less',
    'less/bootstrap/utilities.less',
    'less/bootstrap/responsive-utilities.less',
    'less/bootstrap/normalize.less',
    'less/bootstrap/dropdownß.less'
  ])
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/bootstrap'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('build-collections', function() {
  return gulp.src('less/semantic/definitions/collections/*.less')
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/semantic/collections'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('build-elements', function() {
  return gulp.src('less/semantic/definitions/elements/*.less')
    .pipe(plumber())
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer())
    .pipe(stripCssComments())
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('styles/semantic/elements'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('build-globals', function() {
  return gulp.src('less/semantic/definitions/globals/*.less')
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/semantic/globals'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('build-modules', function() {
  return gulp.src('less/semantic/definitions/modules/*.less')
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/semantic/modules'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('build-views', function() {
  return gulp.src('less/semantic/definitions/views/*.less')
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/semantic/views'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('build-custom', function() {
  return gulp.src('less/custom/context.less')
      .pipe(plumber())
      .pipe(less())
      .on('error', swallowError)
      .pipe(autoprefixer())
      .pipe(stripCssComments())
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('styles/custom'))
      .pipe(bs.reload({stream: true}));
});

gulp.task('reload-html', function() {
  return gulp.src('mock/*.html')
      .pipe(bs.reload({stream:true}));
})

gulp.task('build', ['build-bootstrap', 'build-collections', 'build-elements', 'build-globals', 'build-modules', 'build-views', 'build-custom']);

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch([
    'less/semantic/definitions/collections/*.less',
    'less/semantic/theme/collections/*.less'
  ],['build-collections']);
  gulp.watch([
      'less/semantic/definitions/elements/*.less',
      'less/semantic/theme/elements/*.less'
  ],['build-elements']);
  gulp.watch([
    'less/semantic/definitions/globals/*.less',
    'less/semantic/theme/globals/*.less'
  ],['build-globals']);
  gulp.watch([
    'less/semantic/definitions/modules/*.less',
    'less/semantic/theme/modules/*.less'
  ],['build-modules']);
  gulp.watch([
    'less/semantic/definitions/views/*.less',
    'less/semantic/theme/views/*.less'
  ],['build-views']);
  gulp.watch([
    'less/custom/*.less'
  ],['build-custom']);
  gulp.watch([
    'less/bootstrap/*.less'
  ],['build-bootstrap']);
  gulp.watch([
    'less/fuku/*.less'
  ],['build-fuku']);
  gulp.watch('mock/*.html', ['reload-html']);
});
