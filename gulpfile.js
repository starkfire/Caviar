var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var scss_src = 'scss/caviar.scss';
var scss_dist = 'dist';

// generate dist/caviar.css
gulp.task('sass', function(){
	return gulp.src(scss_src)
		.pipe(sass().on('error', console.error.bind(console)))
		.pipe(gulp.dest(scss_dist));
});

// generate dist/caviar.min.css
gulp.task('sass-minify', function(){
	return gulp.src(scss_src)
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		})).on('error', console.error.bind(console))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(scss_dist))
});