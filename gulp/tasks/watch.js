var gulp=require('gulp'),
watch=require('gulp-watch'),
browserSync=require('browser-sync').create();

gulp.task('watch', function (argument) {
	// body...
	browserSync.init({
		notify: false,
		server:{
			baseDir: "app"
		}
	});

	watch('./app/index.html', function () {
		// body...
		browserSync.reload();
	});

	watch('./app/index.html', function () {
		// body...
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function () {
		// body...
		gulp.start('cssInject');
	});

});


gulp.task('cssInject', ['styles'], function () {
	// body...
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(browserSync.stream());
});