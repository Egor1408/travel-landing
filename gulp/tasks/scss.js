import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { soursemaps: true})
		//вывод ошибки
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>'
			})
		))
		//переименование флиасов изображений
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		//препроцессор
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		//групировка медиазапросов
		.pipe(groupCssMediaQueries())
		//webp
		.pipe(webpcss(
			{
				webpClass: ".webp",
				noWebpClass: ".no-webp"
			}
		))
		//автопрефиксер
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true,
		}))
		//не сжатый файл
		//.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		//переименовываем css
		.pipe(rename({
			extname: ".min.css"
		}))
		//создаем итоговый файл
		.pipe(app.gulp.dest(app.path.build.css))
		//автообновление
		.pipe(app.plugins.browsersync.stream());
}