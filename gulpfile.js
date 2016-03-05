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
    console.log(config.server_public);
    nodemon({
    		// the script to run the app
    		script: config.app + '/components/server/server.jsx',
    		ext: 'js jsx',
    		ignore: [config.server_public + '/**/*'],
    		exec: 'babel-node --presets es2015,react'
    	});
});

gulp.task('build', ['styles', 'js'])

gulp.task('styles', function () {
	var returnval = gulp.src(config.sass_files)
	.pipe(compass({
	    sass: config.sass_directory,
	    css: config.css
	}))
	.on('error', onError)
	.pipe(gulp.dest(config.css))
	.pipe(livereload());

	return returnval;
});


gulp.task('watch', function () {
    gulp.watch([config.sass_files], ['styles']);
    gulp.watch([config.isomorphic_jsx_files, config.isomorphic_js_files, config.browser_entry], ['js']);
});

gulp.task('js', function () {
    return gulp.src([config.browser_entry])
    .pipe(webpack({
            output: {
                    filename: 'main.js'
                  },
                  module: {
                      loaders: [
                        {
                          test: /.jsx?$/,
                          loader: 'babel-loader',
                          query: {
                            presets: ['es2015', 'react']
                          }
                        }
                      ]
                      },
                       resolve: {
                              extensions: ['', '.js', '.jsx']
                          }
     }))
     .on('error', onError)
     .pipe(gulp.dest(config.server_public))
     .pipe(livereload());
});

