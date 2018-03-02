var 
    gulp = require("gulp"),
    sass = require('gulp-sass'),
    sourceMaps = require("gulp-sourcemaps"),
    ts =  require("gulp-typescript"),
    merge   =   require('merge2'),
    plumber = require('gulp-plumber')
    
    asset = {
        'adminStyle' : 'asset/scss/adminStyle/adminStyle.scss',
        'fontStyle' : 'asset/scss/fontStyle/fontStyle.scss',
        'adminScript' :'asset/ts/adminScripts.ts',
        'fontScript' :'asset/ts/fontScripts.ts',

        'scss':'asset/scss/**/**.scss',
        'ts':'asset/ts/**/**/*.ts',
    },
    dest = { //destination folder for all compiled scripts
        'ts':'inc/js',
        'scss':'inc/css',
        'inc':"inc"
    } 
;

/*|
||defaults
|*/
    gulp.task('test', function() { console.log("pluins ok"); });
    gulp.task('default',[ "font", "tsc-w" ]);
    gulp.task('all',[ "font", "tsc-w", "sftinc" ]);

/*| Short-hand |*/
    gulp.task('font', [ "scss" ] ,function() {
        gulp.watch( asset.scss , ["scss"]);
    });
    gulp.task('tsc-w', [ "tsc" ] ,function() {
        gulp.watch( asset.ts , ['tsc']);
    });
/*|main task list|*/
    /*[ sass / scss ] > [ css  ( min ) ]*/
        gulp.task('scss', function() {
            gulp.src( asset.scss ) //compile all files under sass files 
            .pipe(sourceMaps.init())
            .pipe(plumber())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(sourceMaps.write("_map"))
            .pipe(gulp.dest( dest.scss ))
        });
    /*[ ts ] > [ javaScript ] */
        gulp.task('tsc', function() {
            var 
                tSrc = gulp.src( asset.ts )
                .pipe(sourceMaps.init())
                        .pipe(ts({
                            declaration: true,
                            removeComments:true
                        })
                );
            return merge([
                tSrc.dts.pipe(gulp.dest( 'inc/typings/cust' )),
                tSrc.js.pipe(sourceMaps.write("_map")).pipe(gulp.dest(dest.ts))
            ]);
        });
/*|shiftinc|*/
    gulp.task('sftinc', function() {
        gulp.src([
            './node_modules/jquery**/**',
            "./node_modules/font-awesome**/**",
            "./node_modules/bootstrap**/**",
            
        ])
          .pipe(gulp.dest(dest.inc+ '/vendor/'))
    });