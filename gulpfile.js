var gulp = require('gulp'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    webpack = require('gulp-webpack'),
    babel = require('gulp-babel'),
    config = require('./gulp-config');

    function onError(err) {
      console.log(err);
      this.emit('end');
    }

gulp.task('default', ['build', 'connect', 'watch']);

gulp.task('build', ['styles', 'js'])

gulp.task('styles', function () {
	return gulp.src(config.sass_files)
	.pipe(compass({
	    sass: config.sass_directory,
	    css: config.css
	}))
	.on('error', onError)
	.pipe(gulp.dest(config.css))
	.pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch([config.sass_files], ['styles']);
    gulp.watch([config.jsx_files, config.js_files], ['js']);
});

gulp.task('js', function () {
    return gulp.src([config.jsx_files, config.js_files])
    .pipe(babel({
       		presets: ['react', 'es2015']
    }))
    .pipe(gulp.dest(config.build))
    .pipe(webpack({
            output: {
                    filename: 'main.js'
                  }
     }))
     .on('error', onError)
     .pipe(gulp.dest(config.app))
     .pipe(connect.reload());
});

//BIG NOTE  current version of gulp-connect 3.1.0 has a bug where live reload isn't triggering
gulp.task('connect', function() {
  connect.server({
    root: [config.app],
    port: 9000,
    livereload: true
  });
});

