var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var connect = require('gulp-connect');

gulp.task('default', function () {

    var scripts = gulp.src(['./app/**/*.js'], {read: false});
    var css = gulp.src(['./css/*.css'], {read: false});

    gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(scripts))
    .pipe(inject(css))
    .pipe(gulp.dest('./'));
});

gulp.task('serve', function () {
    connect.server({
        livereload: true
    });
});