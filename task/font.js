const { src, dest} = require('gulp');




const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");



const paths = require("../config /path");
const app = require("../config /app");

const font = () =>{
    return src(paths.font.src)
        .pipe(plumber({
            errorHandler:notify.onError(error => ({
                title: 'font',
                message: error.message
            }))
        }))
        .pipe(newer(paths.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(paths.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(paths.font.dest))
}

module.exports = font;
