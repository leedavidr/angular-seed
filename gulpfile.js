var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');

var paths = {
    styles: ['./app/assets/css/less/app.less']
};

gulp.task('less', function () {
    gulp.src(paths.styles)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./app/assets/css'));
});
