var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var scriptsMatcher = './app/**/*.js'
var cssMatcher = './css/*.css';

gulp.task('inject', function () {

    var scripts = gulp.src([ scriptsMatcher], {read: false});
    var css = gulp.src([ cssMatcher], {read: false});

    gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(scripts))
    .pipe(inject(css))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
    watch(scriptsMatcher, function() {
        gulp.run('inject');
    });
});
