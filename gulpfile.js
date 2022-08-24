//основной модуль
import gulp from 'gulp';

//импорт путей
import { path } from './gulp/config/path.js';

//импорт плагинов
import { plugins } from './gulp/config/plugins.js';

//глобальные переменные
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

//импорт задач
import { server } from './gulp/tasks/server.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js'
import { copy } from './gulp/tasks/copy.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

//наблюдатель
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//построение сценариев выполнения задач
const mainTasks = gulp.series(fonts, gulp.parallel(
	html, 
	scss,
	js,
	images,
	copy,
));

const dev = gulp.series(
	reset,
	mainTasks,
	gulp.parallel(watcher, server)
);

//сценарий по умолчанию
gulp.task('default', dev);