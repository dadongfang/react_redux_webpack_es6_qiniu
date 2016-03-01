
const routerConfig = [
	{
		path: '/',
		getComponents(location, callback) {
			require.ensure([], (require) => {
			callback(null, require('./components/FreeEntry'))
			})
		}
	},
	{
		path: '/free',
		getComponents(location, callback) {
			require.ensure([], (require) => {
			callback(null, require('./components/FreeService'))
			})
		}
	}
]

module.exports = routerConfig
