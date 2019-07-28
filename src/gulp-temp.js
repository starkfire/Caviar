var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var scss_src = 'scss/caviar.scss';
var scss_dist = 'dist';

gulp.task('sass', function(){
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