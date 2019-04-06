const gulp = require('gulp')
const connect = require('gulp-connect')
const stylus = require('gulp-stylus')
const plumber = require('gulp-plumber')
const watcher = require('gulp-watch')
const rename = require('gulp-rename')
const hbs = require('gulp-compile-handlebars')
const yaml = require('js-yaml')
const fs = require('graceful-fs')
const del = require('del')
const runSequence = require('run-sequence')
const nib = require('nib')
const rupture = require('rupture')
const koutoSwiss = require('kouto-swiss')
const ghpages = require('gh-pages')

gulp.task('connect', () => {
  connect.server({
    root: './dist',
    port: 7777,
    livereload: true,
    host: '0.0.0.0'
  })
})

gulp.task('handlebars', () => {
  const config = yaml.safeLoad(fs.readFileSync('./_config.yml', 'utf-8'))
    
  return gulp.src('./src/handlebars/*.hbs')
    .pipe(hbs({
      config
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

gulp.task('stylus', () => {
  return gulp.src('./src/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      compress: false,
      use: [nib(), rupture(), koutoSwiss()],
      import: ['nib', 'kouto-swiss']
    }))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(connect.reload())
})

gulp.task('watch:assets', function() {  
  gulp.src('./src/assets/**/*')
    .pipe(watcher('./src/assets/**/*'))
    .pipe(gulp.dest('./dist/assets/'))
})

gulp.task('copy:assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('clean:dist', () => {
  return del('./dist')
})

gulp.task('cname', () => {
  return fs.writeFileSync('./dist/CNAME', 'floripajs.org')
})

gulp.task('deploy', () => {
  return ghpages.publish('./dist', err => {
    console.log('deploy error', err)
  })
})

gulp.task('watch', () => {
  gulp.watch('./src/stylus/**/*.styl', ['stylus'])
  gulp.watch(['./src/handlebars/*.hbs', './*.yml'], ['handlebars'])
})

gulp.task('build', () => {
  runSequence(
    'clean:dist',
    'copy:assets',
    'stylus', 
    'handlebars',
    'cname',
  )
})

gulp.task('server', () => {
  runSequence(
    'clean:dist',
    'copy:assets',
    'stylus', 
    'handlebars',
    'cname',
    'connect',
    'watch',
  )
})
