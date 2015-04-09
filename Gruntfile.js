'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          templateSettings: {
            variable: 'obj'
          }
        },
        files: {
          "js/compiled/templates.js": ["templates/**/*.html"]
        }
      },
    },

  uglify: {
    minJS: {
      files: {
        'js/compiled/base.min.js': ['js/base/materialize.min.js', 'js/base/init.js'],
        'js/compiled/app.min.js' : ['js/compiled/templates.js', 'js/core.js'],
      }
    }, 
  },

});
  
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jst', 'uglify']);
};
