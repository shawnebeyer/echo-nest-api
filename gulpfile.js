var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');
    jshint = require('gulp-jshint');
    autoprefixer = require('gulp-autoprefixer');

    gulp.task('styles', function() {
    return gulp.src('styles/*.scss')
        .pipe(sass({
            'sourcemap=none': true,
            errLogToConsole: true
        }))
        .pipe(concat('style_scss'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('styles/'))
});

gulp.task("watch", function() {
    gulp.watch("styles/*scss", ["styles"]);
    gulp.watch('js/*.js', ['jshint']);
    });

gulp.task("default", function() {
    gulp.watch("styles/*.scss"), ["styles"]
    });

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('default', ['styles', 'jshint', 'watch']);
