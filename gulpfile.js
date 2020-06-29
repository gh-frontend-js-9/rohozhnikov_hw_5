// var gulp = require('gulp'); // Подключаем Gulp
// var sass = require('gulp-sass'); // Подключаем Gulp

// gulp.task('sass', function() { // Создаем таск "sass"
// 	return gulp.src(['project/scss/**/*.sass', 'project/scss/**/*.scss']) // Берем источник
// 		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
// 		.pipe(gulp.dest('./project/css')); // Выгружаем результата в папку css
// });

// gulp.task('watch', function() {
// 	gulp.watch(['project/sass/**/*.sass', 'project/sass**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
// });

// gulp.task('default', ['watch']);

const gulp = require('gulp'),
    // less = require('gulp-less'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create();

exports.styles = () => {
    return gulp.src('./project/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./project/css'))
};

exports.default = () => {
    browserSync.init({
        server: {
            baseDir: './project/'
        }
    });
    gulp.watch('./project/scss/**/*.scss', gulp.series(['styles']))
    gulp.watch('./project/').on('change', browserSync.reload)
}