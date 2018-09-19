/*global require*/

var gulp = require('gulp'),
	pug = require('gulp-pug'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	pugLinter = require('gulp-pug-linter'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	pug_markdown_filter = require('jstransformer-markdown-it'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	stripCssComments = require ('gulp-strip-css-comments'),
	sourcemaps  = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
	path = require('path'),
	rename = require('gulp-rename'),
  imagemin = require('gulp-imagemin'),
  minify = require('gulp-minify');

var paths = {
  public: './dist/',
  sass: './src/scss/',
  css: './dist/css/',
  data: './src/_data/',
	pug: './src/*.pug',
  js: './src/js/*.js'
};

var displayError = function(error) {
  // Initial building up of the error
  var errorString = '[' + error.plugin.error.bold + ']';
  errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

  // If the error contains the filename or line number add it to the string
  if(error.fileName)
      errorString += ' in ' + error.fileName;

  if(error.lineNumber)
      errorString += ' on line ' + error.lineNumber.bold;

  // This will output an error like the following:
  // [gulp-sass] error message in file_name on line 1
  console.error(errorString);
};

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

var sassOptions = {
  outputStyle: 'compressed'
};

var prefixerOptions = {
  browsers: ['last 2 versions']
};

/* SCSS
---------------------------------------------*/
gulp.task('sass', function (){
	return gulp.src(paths.sass + 'main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(plumber({errorHandler: onError}))
		.pipe(sass(sassOptions))
		.pipe(prefix(prefixerOptions))
		.pipe(concat('main.css'))
		.pipe(stripCssComments({ preserve: false }))
		.pipe(minifyCSS())
		.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.css));
});


/* PUG
---------------------------------------------*/
gulp.task('pug',function (){
	return gulp.src(paths.pug)
		.pipe(pug({
      pretty: true,
      filters: {
        md: pug_markdown_filter
      }
    }))
			.on('error', notify.onError(function (error) {
    		return 'An error occurred while compiling pug.\nLook in the console for details.\n' + error;
			}))
		.pipe(rename(function(file) {
      file.dirname = path.join(file.dirname, file.basename);
      file.basename = 'index';
    }))
		.pipe(gulp.dest(paths.public));
});

/* PUG -index
---------------------------------------------*/
gulp.task('pugIndex',function (){
	return gulp.src("./src/index.pug")
		.pipe(pug({
      pretty: true,
      filters: {
        md: pug_markdown_filter
      }
    }))
			.on('error', notify.onError(function (error) {
    		return 'An error occurred while compiling pug.\nLook in the console for details.\n' + error;
			}))
		.pipe(gulp.dest(paths.public));
});


gulp.task('rebuild', ['pug', 'sass', 'pugIndex','imageOpt'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'pug', 'pugIndex', 'scripts','imageOpt'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

/* PUG LINT
---------------------------------------------*/
gulp.task('lint:template', function () {
  return gulp
    .src(paths.pug)
    .pipe(pugLinter())
    .pipe(pugLinter.reporter());
});

/* JS
---------------------------------------------*/
gulp.task('scripts', function (){
	return gulp.src(paths.js)
		.pipe(minify())
		.pipe(gulp.dest(paths.public + 'js'))
});

/* Imagemin
---------------------------------------------*/
gulp.task('imageOpt', function () {
    return gulp.src('./src/images/**/*.{gif,png,jpg,svg}')
       // .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});

/* WATCH
---------------------------------------------*/
gulp.task('watch', function (){
	gulp.watch(paths.sass + '**/*.scss',['sass']);
	gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/images/**/*.{gif,png,jpg,svg}', ['imageOpt']);
});

/* BUILD
---------------------------------------------*/
gulp.task('build', ['sass', 'pug', 'pugIndex','scripts','imageOpt']);

/* BROWSER SYNC
---------------------------------------------*/
gulp.task('default', ['browser-sync', 'watch']);