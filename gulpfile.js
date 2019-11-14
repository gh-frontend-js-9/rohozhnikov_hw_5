var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'); // Подключаем Gulp

gulp.task('sass', function() { // Создаем таск "sass"
	return gulp.src(['project/sass/**/*.sass', 'project/sass/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('./project/css')); // Выгружаем результата в папку css
});

gulp.task('watch', function() {
	gulp.watch(['project/sass/**/*.sass', 'project/sass**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);