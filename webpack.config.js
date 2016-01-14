var base_folder = './src';
var app_folder = base_folder + "/app";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
	title : 'My App',
	template : base_folder + '/app-template.html',
	inject : 'body'
});
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
/* chunkName= */"vendor", /* filename= */"vendor.bundle.js");

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
		extensions : [ '', '.ts', '.js', '.json','.css' ],
	},
	module : {
		loaders : [
			// Support for .css files
	    { test: /\.css$/, loader: 'style-loader!css-loader' },
			// Support for .ts files
			{	test : /\.ts$/, loader : 'ts', exclude : [ /\.min\.js$/, /\.spec\.ts$/, /\.e2e\.ts$/ ] }
		],
		noParse : [ /rtts_assert\/src\/rtts_assert/, /angular2\/bundles\/.+/ ]
	},
	plugins : [ commonsChunkPlugin, htmlWebpackPlugin ]
};
