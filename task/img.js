const { src, dest} = require('gulp');




const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imgemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");

const paths = require("../config /path");
const app = require("../config /app");

const img = () =>{
    return src(paths.img.src)
        .pipe(plumber({
            errorHandler:notify.onError(error => ({
                title: 'img',
                message: error.message
            }))
        }))
        .pipe(newer(paths.img.dest))
        .pipe(webp())
        .pipe(dest(paths.img.dest))
        .pipe(src(paths.img.src))
        .pipe(newer(paths.img.dest))
        .pipe(gulpif(app.isProd,imgemin(app.imagemin))
            .pipe(dest(paths.img.dest)))
}

module.exports = img;
