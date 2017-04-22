// var gulp = require('gulp'),
// less = require('gulp-less')

// gulp.task('fn1', function () {
//     gulp.src('src/1.less') //入口
//     .pipe(less()) //该任务调用的模块
//     .pipe(gulp.dest('build/src/css')); //出口
// });

// gulp.task('go',function(){
//   gulp.watch('src/*.less', ['fn1']);
// })


'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});