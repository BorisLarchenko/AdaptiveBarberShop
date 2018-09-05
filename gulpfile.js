var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var  minifyCss = require("gulp-minify-css");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var run = require("run-sequence");
var plumber = require('gulp-plumber');

gulp.task('style', function () {
  return gulp.src('./source/less/test-body.less')
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./source/css'))
    .pipe(server.stream())
    .pipe(rename('test-body.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./source/css/'));
  });

gulp.task("serve", ["style"],  function () {
  server.init({
    server: "./source"});
  gulp.watch("./source/less/**/*.less", ["style"]);
  gulp.watch("./source/*.html").on('change', server.reload);
});

gulp.task('clean-prod', function () {
  return del('./build');
});

gulp.task('copy-prod-all', function () {
  gulp.src([
    './source/*.html',
    './source/img/**',
    './source/fonts/**',
    './source/js/**'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('./build'));
});

gulp.task("images-prod", function () {
  return gulp.src("./source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
]))
  .pipe(gulp.dest("./build/img"));
});

//not supported in almost all browsers
gulp.task("webp", function () {
  return gulp.src("./source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("./build/img"));
});

gulp.task('style-prod', function () {
  return gulp.src('./source/less/test-body.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./build/css'))
    .pipe(server.stream())
    .pipe(rename('test-body.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('copy-prod-html', function () {
  gulp.src('./source/*.html')
  .pipe(gulp.dest('./build'));
});

gulp.task("serve-prod", ["style-prod"], function () {
  server.init({
    server: "./build"});
  gulp.watch("./source/less/**/*.less", ["style-prod"]);
  gulp.watch("./source/*.html", ['prod-copy']).on('change', server.reload);
});

gulp.task("build", function (done) {
  run(
    "clean-prod",
    "copy-prod-all",
    "images-prod",
    "style-prod",
    done
  );
});
