/*
// Grunt Setup:
*/

module.exports = function(grunt) {
	
	grunt.initConfig({

		// Include the node modules in the package.json file
		pkg: grunt.file.readJSON('package.json'),
		

		// Task: Compile the source sass files to css
		sass: {
			// Configure the module options
			options: {
				// Generate a css sourceMap for debugging
				sourceMap: true
			},
			// Configure destination
			dist: {
				files: {
					// Compiled css destination
					'../../assets/css/styles.css' :
					// Source sass location
					'../css/styles.scss'
				}
			}
		},

		// Task: Add prefixes to css build
		autoprefixer: {
			// Run in single file mode
			single_file: {
				// Configure the module options
				options: {
					// Application browser support list
					browsers: ['last 5 versions', 'ie 8', 'ie 9']
				},
				// Source css location
				src: '../../assets/css/styles.css',
				// Autoprefixed css destination
				dest: '../../assets/css/styles.css'
			}
		},

		// Task: Minify and concatenate css
		cssmin: {
			combine: {
				// Configure destination
				files: {
					// Minified css destination
					'../../assets/css/styles.min.css':
					// Source css locations (more files can be added - comma separated)
					[
						'../../assets/css/styles.css'
					]
				}
			}
		},

		// Task: Minify and concatenate js
		uglify: {
			my_target: {
				files: {
					// Destination
					'../../assets/js/scripts.min.js': 
					// Source
					[
						'../js/headerstick.js',
						'../js/list.min.js',
						'../js/prism.js'
					]
				}
			}
		},

		// Task: Watch
		watch: {
			files: [
				// Watch these files
				'../css/styles.scss',
				'../css/*/*.scss'
			],
			// Perform these tasks
			tasks: [
				'sass', 'autoprefixer', 'cssmin'
			]
		}

	});


	// CSS
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// JS
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// List the modules to run
	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify']);

};
