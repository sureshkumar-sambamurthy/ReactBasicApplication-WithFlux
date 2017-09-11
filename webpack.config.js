'use strict';

module.exports = {

  entry: ['./app/css/style.scss','./app/js/main'],

  output:{
  	 filename: './build/bundle.js'
  },

  watch:true,
    module:{
	    loaders:[
	       /*{
	        test: /\.js$/,
	        exclude: /node_modules/,
    	   	enforce: "pre",
    	   	loader: 'jshint-loader'
    	   },*/
		    {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'react']
	        }
	      },
	       {
	        	test: /\.(sass|scss)$/,
	        	loader:  ['style-loader', 'css-loader', 'sass-loader']
	        },
	        {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file-loader'
		     },
	        { 
		        test: /\.png$/, 
		        loader: "url-loader?limit=100000" 
     		},
		      { 
		        test: /\.jpg$/, 
		        loader: "file-loader" 
		      },
		      {
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
		      },
		      {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
		      },
		      {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file-loader'
		      },
		      {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
		      }
	    ]
	}
};