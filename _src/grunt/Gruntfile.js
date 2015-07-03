/*
// Grunt Setup: 
//
// Note: Do not add the grunt_modules files to git (see the docs on creating a grunt project https://github.com/createdotnet/development_resources/wiki/Grunt)
//
// Install:
// cd development_resources/grunt/public-core
// npm install
//
// Running: Single build
// cd development_resources/grunt/public-core
// grunt
//
// Running: Watch for changes and build
// cd development_resources/grunt/public-core
// grunt watch
//
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
					'../../css/styles.css' :
					// Source sass location
					'../styles/styles.scss'
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
				src: '../../css/styles.css',
				// Autoprefixed css destination
				dest: '../../css/styles.css'
			}
		},

		// Task: Minify and concatenate css
		cssmin: {
			combine: {
				// Configure destination
				files: {
					// Minified css destination
					'../../css/styles.min.css':
					// Source css locations (more files can be added - comma separated)
					[
						'../../css/styles.css'
					]
				}
			}
		},

		// Task: Watch
		watch: {
			files: [
				// Watch these files
				'../styles/styles.scss',
				'../styles/*/*.scss'
			],
			// Perform these tasks
			tasks: [
				'sass', 'autoprefixer', 'cssmin'
			]
		}

	});


	// Load NPM Modules
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// List the modules to run
	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);


};
