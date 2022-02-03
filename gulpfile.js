const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const uglifycss = require("gulp-uglifycss");

const build = () => {
  return src("./src/**/*.scss").pipe(sass()).pipe(dest("./dist"));
};

const minify = () => {
  return src("./dist/cutiefy.css").pipe(uglifycss()).pipe(dest("./dist"));
};

const watchTask = () => {
  watch(["./src/**/*.scss"], build);
};

exports.default = series(build, minify, watchTask);
