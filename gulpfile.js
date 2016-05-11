const gulp = require("gulp");
const eslint = require("gulp-eslint");
const webpack = require("webpack-stream");

var lintFiles = ["app/**/*.js", "gulpfile.js", "index.js", "server.js"];
var staticFiles = ["app/**/*.html", "app/**/*.css"];

gulp.task("lint", () => {
  return gulp.src(lintFiles)
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("webpack:dev", () => {
  return gulp.src("app/js/entry.js")
    .pipe(webpack({
      devtool: "source-map",
      output: {
        filename: "main.js"
      }
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("static:dev", () => {
  return gulp.src(staticFiles)
    .pipe(gulp.dest("build"));
});

gulp.task("build:dev", ["webpack:dev", "static:dev"]);
gulp.task("default", ["lint", "build:dev"]);
