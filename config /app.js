const isProd = process.argv.includes("--production");
const isDev =!isProd;

module.exports = {
    isProd: isProd,
    isDev:isDev,
    htmlMin:{
        collapseWhitespace: isProd
    },
    webpack:{mode: isProd ? "development":"development"},
    imagemin:{verbose: true},
    fonter:{format:["ttf","woff","woff2","eot","svg",]}
}