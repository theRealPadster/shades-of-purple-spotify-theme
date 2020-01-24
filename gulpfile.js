// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');


// Support Tasks

// Compile any less files into CSS
gulp.task('less', function() {
  return gulp
    .src('./src/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('.build'));
});

// Concat all css files into one user.css
gulp.task('concat-css', function() {
  gulp
    .src('.build/**/*.css')
    .pipe(concat('user.css'))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('.'));
});

// Watch less files for changes
gulp.task('watcher', function() {
  // Compile
  gulp.watch(['src/**/*.less'], ['less']);
  // Concat
  gulp.watch(['.build/**/*.css'], ['concat-css']);
});


// Command Line Tasks

// Run build tasks and then watch for changes
gulp.task('watch', function() {
  runSequence(['less'], ['concat-css'], 'watcher');
});

// Compile and concat into a single user.css
gulp.task('build', function() {
  runSequence(['less'], ['concat-css'])
})
