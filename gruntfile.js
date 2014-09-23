'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['zep.js'],
      options: {
        globals: {
          console: true,
          module: false,
          jQuery: false
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap: 'zep.min.js.map',
        sourceMapRoot: '/',
        sourceMappingURL: 'zep.min.js.map',
        sourceMapPrefix: 1,
        mangle: true,
        compress: {
          global_defs: {
            'DEBUG': true
          },
          dead_code: true
        },
        report: 'min'
      },
      dist: {
        files: {
          'dist/zep.min.js': [
            'zep.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: [
          'zep.js',
          'test/spec/*.js'
        ],
        tasks: ['compile_scripts']
      }
    },
    copy: {
      rtoj: {
        src: 'zep.js',
        dest: 'test/src/zep.js',
      }
    },
    jasmine: {
      src: 'test/src/*.js',
      options: {
        specs: 'test/spec/*Spec.js',
        helpers: 'test/spec/*Helper.js'
      }
    },
    jsdoc : {
      dist : {
        src: [
          './zep.js',
          'README.md'
        ],
        jsdoc: './node_modules/.bin/jsdoc',
        options: {
          destination: 'docs',
          configure: './config/conf.json',
          template: './node_modules/jsdoc-oblivion/template'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.registerTask('jshint', ['jshint']);
  grunt.registerTask('compile_scripts', ['uglify:dist', 'copy:rtoj', 'jasmine']);
  grunt.registerTask('build', ['uglify:dist']);
  grunt.registerTask('test', ['copy:rtoj', 'jasmine']);
  grunt.registerTask('default', ['watch:scripts']);
  grunt.registerTask('default', ['watch:scripts']);
};
