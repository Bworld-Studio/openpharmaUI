import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login'

Vue.use(Router)

// Manually add the Login vue because it's outside the components folder
let routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	}
]

const resourceRoutes = loadRoutes()

resourceRoutes.forEach((route) => {
	routes.push(route[0])
})

export default new Router({
	mode: 'history',
	routes
})

// Import all of the components routes files
function loadRoutes () {
	const context = require.context('@/components', true, /_routes.js$/i)
	return context.keys()
		.map(context) 				// import module
		.map(m => m.default) // get `default` export from each resolved module
}