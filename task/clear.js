
const del = require("del");

const paths = require("../config /path");

const clear = () => {
    return del(paths.root);
}

module.exports = clear;