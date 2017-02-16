var gulp = require('gulp'),
    concat = require('gulp-concat'),
    closureCompiler = require('google-closure-compiler').gulp(),
    // mocha = require('gulp-mocha'),
    wrap = require("gulp-wrap"),
    path = require('path'),
    chalk = require('chalk'),
    // builds = require('./develop/ci/gulp/gulp.config.json'),
    preprocess = require('gulp-preprocess'),
    gutil = require('gulp-util'),
    del = require('del'),
    fs = require('fs'),
    DEST = "bin/",
    argArr = process.argv,
    argLen = argArr.length,
    ARGUMENTS = {},
    allExports = [],
    arg;

// If more then two arguments passed
// Extract all arguments and store it into ARGUMENTS
if (argLen > 2) {
    while (argLen-- > 1) {
        arg = argArr[argLen];
        if (/^\-\-/.test(arg)) {
            arg = arg.split(/\=|\:/);
            ARGUMENTS[arg[0].replace(/^\-\-/, '')] = (arg[1] && /\,/.test(arg[1]) && arg[1].split(/\,/)) || (arg[1] || '');
        }
    }
}

function compileFile (src, dest) {
    path = dest.split(/[\\\/]/);
    var file = path[path.length -1],
        dir = path.splice(0, path.length - 1).join('/');
    return gulp.src(src)
        .pipe(closureCompiler({
            js_output_file: file,
            externs: [
              'develop/ci/build/externs.js'
            ],
            extra_annotation_name: [
                'export',
                'todo',
                'note',
                'callback',
                'var',
                'section',
                'alias',
                'mixin',
                'mixer',
                'group',
                'groupInfo'
            ],
            // only_closure_dependencies: false,
            charset: 'utf8',
            jscomp_error: [
                'accessControls',
                'ambiguousFunctionDecl',
                'checkDebuggerStatement',
                'checkRegExp',
                'const',
                'constantProperty',
                'deprecated',
                'externsValidation',
                'fileoverviewTags',
                'globalThis',
                'nonStandardJsDocs',
                'uselessCode',
                'visibility'
            ],
            language_in: 'ECMASCRIPT3',
            jscomp_off: [
                'es5Strict',
                'misplacedTypeAnnotation',
                // 'checkVars',
                'nonStandardJsDocs'
            ],
            jscomp_warning: 'suspiciousCode'
        }))
        .pipe(gulp.dest(dir));
}

// Add commonjs style wrapper
gulp.task('add-wrapper', function () {
    if (!ARGUMENTS['source'] || !ARGUMENTS['destination']) {
        console.log('source or destination file not provided!');
        return 1;
    }

    console.log("\n\nCompiling file: ", ARGUMENTS['source'], " -> ", ARGUMENTS['destination'], "\n");
    gulp.src(ARGUMENTS['source'])
        .pipe(wrap(`
(function (factory) {
    if (typeof module === 'object' && typeof module.exports !== "undefined") {
        module.exports = factory;
    } else {
        factory(FusionCharts);
    }
}(function (FusionCharts) {
<%= contents %>
}));
        `))
        .pipe(gulp.dest(ARGUMENTS['destination']));
});

// Closure-compiler
gulp.task('compile', function () {
    if (!ARGUMENTS['source'] || !ARGUMENTS['destination']) {
        console.log('source or destination file not provided!');
        return 1;
    }
    console.log("\n\nCompiling file: ", ARGUMENTS['source'], " -> ", ARGUMENTS['destination'], "\n");
    compileFile(ARGUMENTS['source'], ARGUMENTS['destination']);
});


// Default build complete package
gulp.task('default', function () {
    // Take destination directory form command line argument
    console.log('No default task!');
});

