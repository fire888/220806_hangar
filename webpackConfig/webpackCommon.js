const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
			    test: /\.txt$/, use: 'raw-loader' },
			{
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        outputPath: ''
                    }
                }]
            },
            {
                test: /\.(obj|glb|gltf|FBX|bin)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'model/[name].[ext]',
                        outputPath: ''
                    }
                }]
            },
            {
                test: /\.mp4$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: ''
                    }
                }]
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader", options: { injectType: "styleTag" } },
                    'css-loader'
                ]
            },
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: './public/index.html'
		}),
		new webpack.ProvidePlugin({
			THREE: 'three'
		})
	]
}