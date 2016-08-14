var gulp = require('gulp');
var livereload = require('gulp-livereload');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-ruby-sass');
//var scss =require('gulp-sass');

gulp.task('html', function() {
	gulp.src('src/**/*.html')
	.pipe(fileinclude({
		prefix:"@@",
		basepath:'src/component/'
	}))
	.pipe(gulp.dest('./build'))
	.pipe(livereload())
	;
});
gulp.task('css',function(){
	sass('src/**/css.scss')
	.pipe(gulp.dest('./build/'))
    .on('error', sass.logError)
	.pipe(livereload());
});
gulp.task('img',function(){
	gulp.src('src/**/*.png').pipe(gulp.dest('./build'))
	.pipe(livereload())
})
/*
gulp.task('sass',function(){
	gulp.src("src//.scss").pipe(scss())
	.pipe(gulp.dest('./build'))
	.pipe(livereload());
});
*/
//watch
gulp.task('watch', function() {
	livereload.listen();
	var server = livereload();
	gulp.watch(['src/**/*.html','src/**/*.htm'], ['html']);
	gulp.watch('src/**/*.scss',['css','img'])
});

gulp.task('default',['html','css','img'])