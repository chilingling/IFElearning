const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}, {
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			}, {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}, {
				test: /\.(png|gif|jpg|jpeg|bmp)$/i,
				use: ['file-loader']
			}

		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
	// devServer: {
	// 	contentBase: './dist' //告诉dev-server在dist目录下找文件
	// }
};