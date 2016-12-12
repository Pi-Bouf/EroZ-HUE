module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    '../scripts/<%= pkg.name %>.min.js': ['sources/scripts/<%= pkg.name %>.js'],
                    '../scripts/jshue.min.js': ['sources/scripts/jshue.js'],
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'sources/sass/',
                    cssDir: '../styles/',
                    environment: 'production',
                    noLineComments: true
                }
            },
            watch: {
                options: {
                    watch: true,
                    sassDir: 'sources/sass/',
                    cssDir: '../styles/',
                    noLineComments: true
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'sources/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../images/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['compass:watch']);
    grunt.registerTask('prod', ['uglify', 'compass:dev', 'imagemin']);

};