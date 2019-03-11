var gulp 	= require('gulp'),
  	sass 	= require('gulp-sass'),
  	rename 	= require('gulp-rename');

var paths = {
  styles: {
    src: './dev/sass/**/*.scss',
    dest: './dist/css/'
  },
};

function styles() {
  return gulp
  	.src(paths.styles.src, {
      sourcemaps: true
    })
	.pipe(sass())
	.pipe(rename({
	  basename: 'main',
	  suffix: '.min'
	}))
.pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles); 
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);   

