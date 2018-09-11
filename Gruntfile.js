module.exports = function(grunt) {
	const sass = require('node-sass');
	
	grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'css/index.css': 'sass/index.scss'
				},
			},
		},
		watch: {
			scripts: {
				files: ['sass/*.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
					spawn: true,
				},
			},
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'css/index.css',
						'index.html',
					]
				},
				options: {
					watchTask: true,
					server: './',
				},
			},
		},
		
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
				'css/index.css': ['css/index.css']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['sass', 'cssmin', 'browserSync', 'watch']);
};
