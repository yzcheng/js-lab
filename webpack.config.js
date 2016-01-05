var webpack = require('webpack');
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
/* chunkName= */"vendor", /* filename= */"vendor.bundle.js");
var base_folder = './src';
var app_folder = base_folder + "/app";
module.exports = {
	entry : {
		app : app_folder + '/boot.ts',
		vendor : [ base_folder + '/vendor.ts' ]
	},
	output : {
		path : './build',
		filename : '[name].js',
	},
	resolve : {
		extensions : [ '', '.ts', '.js', '.json' ],
	},
	module : {
		loaders : [
		// Support for .ts files
		{
			test : /\.ts$/,
			loader : 'ts',
			exclude : [ /\.min\.js$/, /\.spec\.ts$/, /\.e2e\.ts$/ ]
		} ],
		noParse : [ /rtts_assert\/src\/rtts_assert/, /angular2\/bundles\/.+/ ]
	},
	plugins : [ // commonsPlugin,
	commonsChunkPlugin ]
};
