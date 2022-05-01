const { src, dest, watch,series,parallel} = require('gulp');




const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const size = require("gulp-size");
const htmlMin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");

const paths = require("../config /path");
const app = require("../config /app");

const html = () =>{
    return src(paths.html.src)
        .pipe(plumber({
            errorHandler:notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({title: 'До сжатия'}))
        .pipe(htmlMin(app.htmlMin))
        .pipe(size({title:"После сжатия"}))
        .pipe(dest(paths.html.dest))

}

module.exports = html;