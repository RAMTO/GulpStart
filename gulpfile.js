// Include modules
var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync');

// Tasks

// LESS
gulp.task('less', function(){
	gulp.src('css/style.less')
		.pipe(less()) 
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
      		stream: true
	    }));
});


// Browser Sync
gulp.task('browserSync', function() {
	browserSync({
			server: {
			baseDir: ''
		}
	});
});

// Watch
gulp.task('watch',['browserSync', 'less'],  function(){
	gulp.watch('css/style.less', ['less']); 
	gulp.watch('*.html', browserSync.reload); 
  	gulp.watch('js/*.js', browserSync.reload); 
});
