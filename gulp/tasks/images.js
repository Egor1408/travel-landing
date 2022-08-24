import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return app.gulp.src(app.path.src.images)
		//вывод ошибок
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message%>'
			})
		))
		//проверка обновления картинок
		.pipe(app.plugins.newer(app.path.build.images))
		//конвертация в webp
		.pipe(webp())
		//копирование изображений в итоговую папку
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.newer(app.path.build.images))
		//оптимизация
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			interlaced: true,
			optimizationLevel: 3 //0 to 7
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		//получаем SVG
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream())
}