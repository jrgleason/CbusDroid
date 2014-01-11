module.exports = function(grunt) {
grunt.initConfig({
  stylus: {
    compile : {
      files : {
        'css/gleason.css' : 'stylus/*.styl'
      }
    }
  }
});
grunt.loadTasks('tasks');
grunt.loadNpmTasks('grunt-contrib');
grunt.loadNpmTasks('grunt-contrib-internal');

grunt.registerTask(
  'build', 
  'Compiles all of the assets and copies the files to the build directory.', 
  [ 'stylus' ]
);
grunt.registerTask(
  'default', 
  'Watches the project for changes, automatically builds them and runs a server.', 
  [ 'build' ]
);
}
