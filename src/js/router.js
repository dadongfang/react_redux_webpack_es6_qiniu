
const routerConfig = [
	{
		path: '/',
		getComponents(location, callback) {
			require.ensure([], (require) => {
				callback(null, require('./components/FreeEntry'))
			}, 'FreeEntry')
		}
	},
	{
		path: '/free',
		getComponents(location, callback) {
			require.ensure([], (require) => {
				callback(null, require('./components/FreeService'))
			}, 'FreeService')
		}
	}
]

module.exports = routerConfig
