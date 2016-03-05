var gulp = require('gulp'),
    compass = require('gulp-compass'),
    react = require('gulp-react'),
    webpack = require('webpack-stream'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    config = require('./gulp-config');

    function onError(err) {
      console.log(err);
      this.emit('end');
    }

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('serve', function () {

    livereload.listen();
    nodemon({
    		// the script to run the app
    		script: config.app + '/components/server/server.jsx',
    		ext: 'js jsx',
    		ignore: [config.server_public + "/**/*"],
    		exec: 'babel-node --presets es2015,react'
    	}).on('restart', ['js', function(){
          		// when the app has restarted, run livereload.
          		gulp.src(config.server_public + '/main.js')
          			.pipe(livereload());
          	}]);
});

gulp.task('build', ['styles', 'js'])

gulp.task('styles', function () {
	return gulp.src(config.sass_files)
	.pipe(compass({
	    sass: config.sass_directory,
	    css: config.css
	}))
	.on('error', onError)
	.pipe(gulp.dest(config.css));
});


gulp.task('watch', function () {
    gulp.watch([config.sass_files], ['styles']);
    gulp.watch([config.isomorphic_jsx_files, config.isomorphic_js_files], ['js']);
});

gulp.task('js', function () {
    return gulp.src([config.isomorphic_jsx_files, config.isomorphic_js_files])
    .pipe(babel({
       		presets: ['react', 'es2015']
    }))
    .on('error', onError)
    .pipe(gulp.dest(config.build))
    .pipe(webpack({
            output: {
                    filename: 'main.js'
                  }
     }))
     .on('error', onError)
     .pipe(gulp.dest(config.server_public));
});

