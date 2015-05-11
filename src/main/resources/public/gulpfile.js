var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var less = require('gulp-less');

var scriptsMatcher = './app/**/*.js'
var lessMatcher = './less/*.less';
var cssMatcher = './css/*.css';

gulp.task('default', function() {
    watch([scriptsMatcher, lessMatcher], function() {
        gulp.run('inject');
    });
});

gulp.task('inject', ['less'], function () {
    var scripts = gulp.src([ scriptsMatcher], {read: false});
    var css = gulp.src([cssMatcher], {read: false});

    gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(scripts))
    .pipe(inject(css))
    .pipe(gulp.dest('./'));
});

gulp.task('less', function() {
    gulp.src(lessMatcher)
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

