'use strict';
module.exports = function ( grunt ) {

    // load all grunt tasks matching the `grunt-*` pattern
    // Ref. https://npmjs.org/package/load-grunt-tasks
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig( {
        // watch for changes and trigger sass, uglify and livereload
        watch: {
            sass: {
                files: [ 'sass/**/*.{scss,sass}' ],
                tasks: [ 'sass', 'autoprefixer' ]
            }
        },
        // sass
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/grid.css': 'scss/grid.scss'
                }
            }
        },
        // autoprefixer
        autoprefixer: {
            options: {
                browsers: [ 'last 2 versions', 'ie 10', 'ios 6', 'android 4' ],
                map: true
            },
            files: {
                expand: true,
                flatten: true,
                src: 'dist/grid.css',
                dest: 'dist'
            }
        }
    } );

    // register task
    grunt.registerTask( 'default', [ 'sass', 'autoprefixer', 'watch' ] );
};