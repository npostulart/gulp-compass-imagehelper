var gulp      = require('gulp');
var sass      = require('gulp-sass');
var sassImage = require('..');

var paths = {
    images: 'images/**/*.+(jpeg|jpg|png|gif|svg)',
    sass: 'sass/**/*.scss'
};

gulp.task('sass-image', function (cb) {
    return gulp.src(paths.images)
            .pipe(sassImage({
                // targetFile: '_generated-imagehelper.scss', // default target filename is '_sass-image.scss'
                // template: 'your-sass-image-template.mustache',
                images_path: 'images/',
                css_path: 'css/',
                prefix: 'icon--'
            }))
            .pipe(gulp.dest('sass'));
});

gulp.task('sass', function (cb) {
    return gulp.src('sass/main.scss')
            .pipe(sass({ errLogToConsole: true }))
            .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass-image'], function () {
    gulp.watch(paths.images, ['sass-image']);
    gulp.watch(paths.sass, ['sass']);
});
