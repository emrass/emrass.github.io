(function() {
  'use strict';

  var path = require('path');

  module.exports = function(grunt) {
    // Force unix linefeeds (see https://github.com/gruntjs/grunt/issues/1123)
    grunt.util.linefeed = '\n';

    // Load all custom tasks from grunt/tasks dir
    grunt.loadTasks(path.join(process.cwd(), 'grunt/tasks'));

    var gruntData = {
      // restart the grunt connect server after changing any value
    };

    // Load all grunt config files (in grunt subfolder) and all tasks installed via npm
    require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'grunt/config'),

      // Load grunt plugins just-in-time (faster than using load-grunt-tasks)
      jitGrunt: {
        staticMappings: {
        }
      },

      data: gruntData
    });
  };
}());
