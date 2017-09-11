'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();


});

function buildScripts() {

  return gulp.src([
      //path.join(conf.paths.src, '*.js'),
      path.join(conf.paths.src, '/app/**/*.js'), //only grabs from App folder

      //Ignore *.spec.js files
      path.join('!' + conf.paths.src, '/app/**/*.spec.js'), //only grabs from App folder


      //TODO: Ignore files and views from gulp build FT for now...
      //path.join('!' + conf.paths.env, "/**/*.js"), //ignore env folder

  	])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};
