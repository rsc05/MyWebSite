var gulp=require('gulp'),
postcss=require('gulp-postcss'), 
fs = require("fs"),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport=require('postcss-import'),
mixins=require('postcss-mixins')


gulp.task('styles', function() {
	// body...
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.on('error', function (errorInfo) {
		// tell watch to do what it can
		console.log(errorInfo.toString());
		this.emit('end');
	}) //if an error occur
	.pipe(gulp.dest('./app/temp/styles')); // Asyncronus 		
});