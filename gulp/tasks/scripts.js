var gulp = require('gulp'),
webpack=require('webpack');

// alert("This is a test for our webpack automation")

gulp.task('scripts', function(callback) {
	// body...
	webpack(require('../../webpack.config.js'), function (error, stats) {
		// body...
		if (error) {
			console.log(error.toString());
		}
		console.log(stats.toString());
		callback();
	});

});