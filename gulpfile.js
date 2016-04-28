var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
// var exec = require('gulp-exec');
var exec = require('child_process').exec;
var path = require('path');
var config = require('./config');
var buildStr = config.rootDir.build;
var productionStr = config.rootDir.production;

gulp.task('clean:build', function() {
  del([
    path.join(buildStr, '/**/*')
  ], {
    force: true
  }).then(paths => {
    console.log('\nDeleted files and folders:\n', paths.join('\n'), '\n\n');
  });
});

gulp.task('clean:production', function() {
  del([
    path.join(productionStr, '/**/*')
  ], {
    force: true
  }).then(paths => {
    console.log('\nDeleted files and folders:\n', paths.join('\n'), '\n\n');
  });
});

gulp.task('build', ['clean:build'], function() {
  console.log('building...');
  exec('webpack --config webpack-develop.config.js --progress --profile --colors', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('release', ['clean:production'], function() {
  console.log('packing...');
  exec('webpack --config webpack-production.config.js -p -d --progress --profile --colors', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('imagemin', () => {
  return gulp.src(productionStr + 'img/*')
    .pipe(imagemin({
      progressive: true,
			svgoPlugins: [{removeViewBox: false}],
      optimizationLevel: 7,
			use: [pngquant({quality: '65-80'})]
    }))
    .pipe(gulp.dest(productionStr + 'img'));
})
