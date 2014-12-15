var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade');

var paths = {
    styles: ['./app/assets/css/less/app.less'],
    index: ['./app/index.jade']
};

gulp.task('less', function () {
    gulp.src(paths.styles)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src(paths.index)
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./app/'))
});

gulp.task('build', function(){
    gulp.run('less', 'jade');
});
