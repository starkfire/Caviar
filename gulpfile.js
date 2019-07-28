var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var runSequence = require('gulp4-run-sequence');

var scss_pre = 'scss/caviar.scss';
var scss_post = 'src';

var scss_release = 'dist';

// generate src/caviar.css
gulp.task('sass', function(){
	return gulp.src(scss_pre)
		.pipe(sass().on('error', console.error.bind(console)))
		.pipe(gulp.dest(scss_post));
});

// generate src/caviar.min.css
gulp.task('sass-minify', function(){
	return gulp.src(scss_pre)
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		})).on('error', console.error.bind(console))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(scss_post))
});

// generate distributable
gulp.task('dist', function(){
	return gulp.src(scss_pre)
		.pipe(sass().on('error', console.error.bind(console)))
		.pipe(gulp.dest(scss_release));
});

// generate minified distributable
gulp.task('dist-minify', function(){
	return gulp.src(scss_pre)
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		})).on('error', console.error.bind(console))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(scss_release))
});

// Build - Source
gulp.task('default', function(callback){
	runSequence(['sass', 'sass-minify'], callback);
});

// Build - Distributable
gulp.task('build', function(callback){
	runSequence(['dist', 'dist-minify'], callback);
});