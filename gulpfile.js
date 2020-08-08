const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      browsersync  = require('browser-sync').create(),
      del          = require('del'),
      autoprefixer = require('gulp-autoprefixer'),
      csso         = require('gulp-csso'),
      pug          = require('gulp-pug'),
      htmlmin      = require('gulp-htmlmin')

const path = {
    build:    './src',
    css:      {
        source:      './gulp-source/styles/main.+(scss|sass)',
        dest:        './src/',
        watchSource: './gulp-source/styles/**/*.scss',
    },
    html:     {
        indexSource: './gulp-source/pages/index.pug',
        dest:        './src/',
        watchSource: './gulp-source/pages/**/*.pug',
    },
    scripts:  {
        source:      './gulp-source/js/**/*',
        dest:        './src/',
        watchSource: './gulp-source/js/**/*.js',
    },
    electron: {
        source: './electron-config/**/*',
        dest:   './src/',
    },
}

// Clean
gulp.task('clean', done => {
    del.sync(path.build)
    done()
})

// Css
gulp.task('css', done => {
    gulp
        .src(path.css.source)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([ 'last 5 versions', '> 1%', 'ie 8', 'ie 7' ], { cascade: true }))
        .pipe(csso({ comments: false }))
        .pipe(gulp.dest(path.css.dest))
        .pipe(browsersync.stream())
    done()
})

// Html
gulp.task('html', done => {
    gulp
        .src(path.html.indexSource)
        .pipe(pug())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(path.build))
        .pipe(browsersync.stream())
    done()
})

// Scripts
gulp.task('scripts', done => {
    gulp
        .src(path.scripts.source)
        .pipe(gulp.dest(path.scripts.dest))
    done()
})

// Electron
gulp.task('electron', done => {
    gulp
        .src(path.electron.source)
        .pipe(gulp.dest(path.electron.dest))
    done()
})

// BrowserSync
function reload(done)
{
    browsersync.reload()
    done()
}

gulp.task('browser-sync', done => {
    browsersync.init({
        server: {
            baseDir: path.build,
        },
        notify: false,
    })
    done()
})

// Watch files
gulp.task('watch', done => {
    gulp.watch(path.css.watchSource, gulp.series('css', reload))
    gulp.watch(path.html.watchSource, gulp.series('html', reload))
    gulp.watch(path.scripts.watchSource, gulp.series('scripts', reload))
    done()
})

gulp.task('default', gulp.parallel('clean', 'electron', 'css', 'html', 'scripts', 'browser-sync', 'watch'))
