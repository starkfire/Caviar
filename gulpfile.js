var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var runSequence = require('gulp4-run-sequence');
var stripCssComments = require('gulp-strip-css-comments');
var browserSync = require('browser-sync');

var scss_pre = 'scss/caviar.scss';
var scss_post = 'src';

var scss_release = 'dist';

// generate src/caviar.css
gulp.task('src', function(){
	return gulp.src(scss_pre)
		.pipe(sass().on('error', console.error.bind(console)))
		.pipe(gulp.dest(scss_post))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// generate src/caviar.min.css
gulp.task('src-minify', function(){
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

// remove comments
gulp.task('src-strip-comments', function(){
	return gulp.src('src/*.css')
		.pipe(stripCssComments({ preserve: false }))
		.pipe(gulp.dest('src'));
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

// remove comments
gulp.task('dist-strip-comments', function(){
	return gulp.src('dist/*.css')
		.pipe(stripCssComments({ preserve: false }))
		.pipe(gulp.dest('dist'));
});

// browser sync
gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'Caviar'
		}
	});
});

// watch
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', gulp.series('default'));
	gulp.watch('dummy.html', gulp.series(browserSync.reload));
});

// Build - Source
gulp.task('default', function(callback){
	runSequence(['src', 'src-minify', 'src-strip-comments'], callback);
});

// Build - Distributable
gulp.task('build', function(callback){
	runSequence(['dist', 'dist-minify', 'dist-strip-comments'], callback);
});