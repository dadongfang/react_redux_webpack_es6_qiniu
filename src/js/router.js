
const routerConfig = [
	{
		path: '/',
		getComponents(location, callback) {
			require.ensure([], (require) => {
				callback(null, require('./components/Home'))
			}, 'Home')
		}
	},
	{
		path: '/another',
		getComponents(location, callback) {
			require.ensure([], (require) => {
				callback(null, require('./components/Another'))
			}, 'Another')
		}
	}
]

module.exports = routerConfig
