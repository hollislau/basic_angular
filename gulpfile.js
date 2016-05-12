const gulp = require("gulp");
const eslint = require("gulp-eslint");
const webpack = require("webpack-stream");
const protractor = require("gulp-protractor").protractor;
const webdriverUpdate = require("gulp-protractor").webdriver_update;

var lintClientFiles = ["app/**/*.js", "test/integration/**/*.js"];
var lintServerFiles = ["gulpfile.js", "index.js", "server.js"];
var staticFiles = ["app/**/*.html", "app/**/*.css"];
var protractorFiles = ["test/integration/*_spec.js"];

gulp.task("lintClient", () => {
  return gulp.src(lintClientFiles)
  .pipe(eslint("app/.eslintrc.json"))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task("lintServer", () => {
  return gulp.src(lintServerFiles)
    .pipe(eslint(".eslintrc.json"))
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

gulp.task("webdriverUpdate", webdriverUpdate);

gulp.task("protractor", ["build:dev", "webdriverUpdate"], () => {
  return gulp.src(protractorFiles)
    .pipe(protractor({
      configFile: "test/integration/config.js"
    }));
});

gulp.task("lint", ["lintClient", "lintServer"]);
gulp.task("build:dev", ["webpack:dev", "static:dev"]);
gulp.task("default", ["lint", "build:dev", "webdriverUpdate", "protractor"]);
