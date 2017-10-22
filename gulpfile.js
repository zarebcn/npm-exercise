const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', () =>
    gulp.src('./css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
);

gulp.task('babel', () =>
    gulp.src('./index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./oldjs'))
);

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
