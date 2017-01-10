var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "public",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules!postcss'
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				loader: "file-loader"
			}
		]
	},
	postcss: [
		require('autoprefixer')
	],
	plugins: [
		new webpack.BannerPlugin("Copyright JayJin inc.")
	],
	devServer: {
		contentBase: "./public",
		port: "8080",
		colors: true, // 서버가 터미널에 출력되는 내용에 색지정
		historyApiFailBack: true,
		inline: true // 페이지 변경되면 새로고침
	}
};
