var gulp = require('gulp');
var sass = require('gulp-sass');
var sassImage = require('..');

var paths = {
    images: 'images/**/*.+(jpeg|jpg|png|gif|svg)',
    sass: 'sass/**/*.scss'
};

function image() {
    return gulp.src(paths.images)
        .pipe(sassImage({
            // targetFile: '_sass-image.scss',
            // template: 'sass-image-template.mustache',
            images_path: 'images/',
            css_path: 'css/',
            prefix: 'icon--'
        }))
        .pipe(gulp.dest('sass'));
}

function css() {
    return gulp.src('sass/main.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./css'));
}

function watch() {
    gulp.watch(paths.images, image);
    gulp.watch(paths.sass, css);
}

var compile = gulp.series(image, css);

exports.compile = compile;
exports.watch = gulp.series(compile, watch);

exports.default = compile;
