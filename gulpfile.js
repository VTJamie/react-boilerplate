var gulp = require('gulp'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    webpack = require('gulp-webpack'),
    config = require('./gulp-config');

gulp.task('default', ['styles', 'js', 'webpack', 'connect', 'watch']);

gulp.task('styles', function () {
	return gulp.src(config.sass + '/**/*.scss')
	.pipe(compass({
	    sass: config.sass,
	    css: config.css
	}))
	.pipe(gulp.dest(config.css));
});


gulp.task('watch', function () {

    gulp.watch([config.sass + '/**/*.scss'], ['styles']);
    gulp.watch([config.jsxfiles], ['js', 'webpack']);
});

gulp.task('webpack', function () {
    return gulp.src(config.js + '/app.js')
    .pipe(webpack({
        output: {
                filename: 'main.js',
              }
    }))
    .pipe(gulp.dest(config.app))
    .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src(config.jsxfiles)
    .pipe(react())
    .pipe(gulp.dest(config.js));
});

//BIG NOTE  current version of gulp-connect 3.1.0 has a bug where live reload isn't triggering
gulp.task('connect', function() {
  connect.server({
    root: [config.app],
    port: 9000,

    livereload: true

  });
});
