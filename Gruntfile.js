module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            sourceMap: true
          },
          files: {
            'dist/styles/main.css': 'src/styles/main.less'
          }
        }
      },
      uglify: {
        target: {
            files: {
                'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };