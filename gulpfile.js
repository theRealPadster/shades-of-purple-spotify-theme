// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const less = require('gulp-less');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');


// Support Tasks

// Compile any less files into CSS
function compileCSS(done) {
  gulp
    .src('./src/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('.build'));
  done();
}

// Concat all css files into one user.css
function concatCSS(done) {
  gulp
    .src('.build/**/*.css')
    .pipe(concat('user.css'))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('.'));
  done();
}

// Watch less files for changes
function watcher(done) {
  // Compile
  gulp.watch(['src/**/*.less'], compileCSS);
  // Concat
  gulp.watch(['.build/**/*.css'], concatCSS);
  done();
}


// Command Line Tasks

// Compile and concat into a single user.css
const build = gulp.series(compileCSS, concatCSS);
// Run build tasks and then watch for changes
const watch = gulp.series(build, watcher);

module.exports = {
  build,
  watch
};
