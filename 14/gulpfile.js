// const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./files/css'));
}

// function img() {
//     return gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'));
// }


exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./**/*.scss', buildStyles);

};
// exports.img = img;


