const {src, dest, watch, parallel, series} = require('gulp');

// Для установки галпа, команда в консоли "npm i"


const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixser = require('gulp-autoprefixer');
const clean = require('gulp-clean');


function scripts() {
  return src([
    'app/js/**/*.js',
    '!app/js/main.min.js' 
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
  // return src('app/scss/*.scss')
  .pipe(autoprefixser({overrideBrowserslist: ['last 10 version']}))
  .pipe(concat('style.min.css'))
  .pipe(scss({ outputStyle: 'compressed' }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())

}

function watching() {
  // watch(['app/scss/style.scss'], styles)
  watch(['app/scss/**/*.scss'], styles)
  // watch(['app/js/main.js'], scripts)
  watch([
    'app/js/**/*.js',
    '!app/js/main.min.js' 
  ], scripts)
  watch(['app/**/*.html']).on('change',browserSync.reload) // *. что бы нашло все файлы html в корне. **./*  что бы нашло всей файлы где бы они небыли
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}

function cleanDist() {
  return src('dist')
  .pipe(clean())
}

// Функция для сбора готовой верстки и сжатых файлов,команда в консоли "gulp build"
function building() { 
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ],{base: 'app'})
  .pipe(dest('dist'))
}

exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync

exports.build = series(cleanDist, building)
exports.default = parallel(styles, scripts, browsersync, watching)