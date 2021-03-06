(function() {
  'use strict';

  module.exports = function(grunt, config) {
    var browserSync = {
      options: {
        notify: false
      }
    };

    browserSync['server'] = {
      bsFiles: {
        src: [
          config.paths.jekyllServer + '/**/*.html',
          config.paths.tmp + '/css/**/*.css',
          config.paths.tmp + '/js/**/*.js',
          config.paths.src + '/js/**/*.js',
          config.paths.src + '/_bower_components/**/*.js',
          config.paths.src + '/img/**/*.{.gif,jpg,jpeg,png,svg,webp}'
        ]
      },
      options: {
        server: {
          baseDir: [
            config.paths.jekyllServer,
            config.paths.tmp,
            config.paths.src
          ]
        },
        watchTask: true
      }
    };

    browserSync['dist'] = {
      options: {
        server: {
          baseDir: config.paths.dist
        }
      }
    };

    return browserSync;
  };
}());
