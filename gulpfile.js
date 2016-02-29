var gulp = require('gulp'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    config = require('./gulp-config');

gulp.task('default', ['connect', 'watch']);

gulp.task('compass', function () {
	gulp.src(config.sass + '/**/*.scss').
	pipe(compass({
	    sass: config.sass,
	    css: config.css
	})).
	pipe(gulp.dest(config.css));
});


gulp.task('watch', function () {

    gulp.watch([config.sass + '/**/*.scss'], ['styles']);
    gulp.watch([config.sass + '/**/*.css', config.app + '/**/*.js'], ['jxm']);
});

gulp.task('jxm', function () {
    gulp.src(config.app)
    .pipe(connect.reload());
});


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 9000,
    livereload: true
  });
});
