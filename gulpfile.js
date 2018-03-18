var gulp=require('gulp'),
watch=require('gulp-watch'), 
postcss=require('gulp-postcss'), 
fs = require("fs"),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport=require('postcss-import');


gulp.task('default', function() {
	// body...
	console.log('Hurray - you created a gulp task')
});

gulp.task('html', function() {
	// body...
	console.log('imagind something useful being done to your html here')
});

gulp.task('styles', function() {
	// body...
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles')); // Asyncronus 		
});

gulp.task('watch', function (argument) {
	// body...
	watch('./app/index.html', function () {
		// body...
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function () {
		// body...
		gulp.start('styles');
	});
});