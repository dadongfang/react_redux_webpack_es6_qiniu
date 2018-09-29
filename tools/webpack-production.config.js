module.exports = [
	require("./webpack.config")({
		// commonsChunk: true,
		// longTermCaching: true,
		// separateStylesheet: true,
		// minimize: true,
		// devtool: "source-map",
		// prerender: true,
		// minimize: true,
		node_env: 'production'
	})
];
