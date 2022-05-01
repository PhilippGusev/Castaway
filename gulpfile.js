const { watch,series,parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const paths = require("../untitled3/config /path");
const app = require("../untitled3/config /app");


const clear = require('./task/clear');
const html = require('./task/html');
const scss = require('./task/scss');
const js =require('./task/js')
const img =require('./task/img')
const font =require('./task/font')



//сервер
const  server = () =>{
    browserSync.init({
        server:{
            baseDir:paths.root
        }
    });
}



//наблюдение
const watcher = () => {
    watch(paths.html.watch, html).on("all", browserSync.reload);
    watch(paths.sass.watch, scss).on("all", browserSync.reload);
    watch(paths.js.watch, js).on("all", browserSync.reload);
    watch(paths.img.watch, img).on("all", browserSync.reload);
    watch(paths.font.watch, font).on("all", browserSync.reload);
}


const build = series(
    clear,
    parallel(html,scss,js,img,font)
);

const dev = series(
    build,
    parallel(watcher,server)
);

exports.scss = scss;
exports.html = html;
exports.watch = watcher;
exports.clear = clear;
exports.js = js;
exports.img = img;
exports.font = font;

exports.default = app.isProd
    ? build
    : dev;