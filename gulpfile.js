var gulp  = require('gulp');
var sass  = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

gulp.task('styles', function() {
  return sass('app/css/styles.sass')
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream:true }));
});

// watch files for changes, compile css and reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['app/css/**/*.sass'], ['styles']);
  gulp.watch(['app/*.html', 'app/css/**/*.css', 'app/js/**/*.js']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
