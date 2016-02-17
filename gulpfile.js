// Load Gulp and your plugins
var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    stylus      = require('gulp-stylus'),
    plumber     = require('gulp-plumber'),
    watcher     = require('gulp-watch'),
    rename      = require('gulp-rename'),
    hbs         = require('gulp-compile-handlebars'),
    yaml        = require('js-yaml'),
    fs          = require('fs'),
    del         = require('del'),
    ghPages     = require('gulp-gh-pages'),
    runSequence = require('run-sequence');

/* RELEASE */
require('gulp-release-tasks')(gulp);

/*
  TASK: Connect
  DESC: Create a server with livereload
*/
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 5000
    });
});

/*
  TASK: Handlebars
  DESC: Compile handlebars files (.hbs) in html files
*/
gulp.task('handlebars', function () {
    var config = yaml.safeLoad(fs.readFileSync('./_config.yml', 'utf-8'));
    
    gulp.src('./src/handlebars/*.hbs')
        .pipe(hbs({
            config: config
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

/*
  TASK: Stylus
  DESC: Compile stylus files (.styl) in css files
*/
gulp.task('stylus', function () {
    gulp.src('./src/stylus/*.styl')
        .pipe(plumber())
        .pipe(stylus({
            use: ['nib'], 
            set: ['compress']
        }))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(connect.reload());
});

/*
  TASK: Watch
  DESC: Copy and Paste modify files from src to dist
*/
gulp.task('watch:assets', function() {  
    gulp.src('./src/assets/**/*')
        .pipe(watcher('./src/assets/**/*'))
        .pipe(gulp.dest('./dist/assets/'));
});

/*
  TASK: Copy
  DESC: Copy assets files from src to dist
*/
gulp.task('copy:assets', function() {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

/*
  TASK: Clean
  DESC: Delete dist folder
*/
gulp.task('clean:dist', function () {
  return del('./dist');
});

/*
  TASK: CNAME
  DESC: Create a CNAME file for gh-pages
*/
gulp.task('cname', function() {
    return fs.writeFileSync('./dist/CNAME', 'floripajs.org');
});

/*
  TASK: gh-pages
  DESC: Deploy dist folder to 'gh-pages' remote branch
*/
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages({
            force: true
        }));
});

/*
  TASK: Watch
  DESC: Verify css and hbs files
*/
gulp.task('watch', function () {
    gulp.watch('./src/stylus/**/*.styl', ['stylus']);
    gulp.watch(['./src/handlebars/*.hbs', './*.yml'], ['handlebars']);
});

// Set tasks
gulp.task('build', function() {
    runSequence('clean:dist',
                'copy:assets',
                'stylus', 
                'handlebars',
                'cname');
});

gulp.task('server', function() {
    runSequence('clean:dist',
                'copy:assets',
                'stylus', 
                'handlebars',
                'cname',
                'connect',
                'watch');
});
