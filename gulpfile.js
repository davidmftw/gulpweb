var gulp            = require('gulp');
var pug             = require('gulp-pug');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');



gulp.task('pug', () =>
  gulp.src('./assets/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./_layouts/'))
    .pipe(gulp.dest('./../gulpweb/'))
);

gulp.task('sass', () =>
  gulp.src('./assets/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
);



gulp.task('default', () => {
  gulp.watch('./assets/pug/*.pug',['pug']);
  gulp.watch('./assets/sass/**/*.sass', ['sass']);
});
/// LALALA
