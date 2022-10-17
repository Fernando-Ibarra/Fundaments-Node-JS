const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) => {
    console.info('Contruyendo el sitio');
    setTimeout(callback, 1200);
})

gulp.task('server', (cb) => {
    gulp.src('www')
    .pipe(server({
        livereaload: true,
        open:true,
    }));
})

gulp.task('default', gulp.series('build', 'server'))