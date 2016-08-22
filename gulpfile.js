var gulp = require('gulp');
var livereload = require('gulp-livereload');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-ruby-sass');
//var eslint = require('gulp-eslint');
//var scss =require('gulp-sass');
// var markdown = require('gulp-markdown');

var marked = require('marked');
var ext_replace = require('gulp-ext-replace'); //改扩展名
var lighlightjs = require('highlightjs/highlight.pack.js')
marked.setOptions({
	highlight: function(code) {
		/*console.log(code)
		console.log("============")
		console.log(lighlightjs.highlightAuto(code).value)*/
		return lighlightjs.highlightAuto(code).value;
	}
});

gulp.task('html', function() {
	gulp.src('src/**/*.html')
		.pipe(fileinclude({
			prefix: "@@",
			basepath: 'src/component/'
		}))
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
});
gulp.task('css', function() {
	sass('src/**/css.scss')
		.pipe(gulp.dest('./build/'))
		.on('error', sass.logError)
		.pipe(livereload());
});
gulp.task('img', function() {
	gulp.src('src/**/*.png').pipe(gulp.dest('./build'))
		.pipe(livereload())
});

gulp.task('md', function() {
	return gulp.src('src/docs/*.htm')
		.pipe(fileinclude({
			prefix: "@@",
			filters: {
				markdown: function(str) {

					return marked.parse(str)
				}
			}
		}))
		.pipe(ext_replace('.html'))
		.pipe(gulp.dest('./build/docs'))
		.pipe(livereload())
});

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
	gulp.watch(['src/**/*.html', 'src/**/*.htm'], ['html']);
	gulp.watch('src/**/*.scss', ['css', 'img'])
	gulp.watch('src/**/*.md', ['md'])
		//gulp.watch('src/**/*.js',['lint'])
});


var toMarkdown = require('gulp-to-markdown');

gulp.task('toMd', function () {
    return gulp.src('./src/getting-started.html')
        .pipe(toMarkdown())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['md','html', 'css', 'img'])