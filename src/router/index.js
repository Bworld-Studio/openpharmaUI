// import routes from 'vue-auto-routing'

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Clients from '@/components/Clients'
import Client from '@/components/Client'
import Products from '@/components/Products'
import Updates from '@/components/Updates'
import Settings from '@/components/Settings'

// Vue.use(Router)

// export default new Router({
// 	// Pass the generated routes into the routes option
// 	routes
// })

// const routes = require('vue-auto-routing')

// const Vue = require('vue')
// const Router = require('vue-router')

// const Home = require('@/components/Home')
// const Clients = require('@/components/Clients')
// const Client = require('@/components/Client')
// const Products = require('@/components/Products')
// const Updates = require('@/components/Updates')
// const Settings = require('@/components/Settings')

// const generateRoutes = require('vue-route-generator')

// const code = generateRoutes({
// 	pages: './components' // Vue page component directory
// })

// import Vue from 'vue'
// import Router from 'vue-router'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
// import Home from '@/components/Home'
// import Clients from '@/components/Clients'
// import Client from '@/components/Client'
// import Products from '@/components/Products'
// import Updates from '@/components/Updates'
// import Settings from '@/components/Settings'

// console.log(code)

Vue.use(Router)

// var requireComponent = function () {
// 	const components = require.context('@/components', true, /Base[A-Z]\w+\.(vue|js)$/)
// 	console.log(components)
// 	const routes = [{ path: '/', name: 'Home', component: Home }]
// 	components.keys().forEach(key => {
// 		const matched = key.match(/Base[A-Z]\w+\.(vue|js)$/)
// 		if (matched && matched.length > 1) {
// 			console.log(components(key))
// 			// const route = matched[1]
// 			var path = '@/components/' + components(key)
// 			var Component = require(path)
// 			routes.push({ path: '/' + components(key), name: components(key), component: Component })
// 			// components(key)
// 		}
// 	})
// 	return routes
// }
// module.exports
// export default new Router({
// 	mode: 'history',
// 	routes
// })

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/Clients', name: 'Clients', component: Clients },
		{ path: '/Client/:uuid', name: 'Client', component: Client, props: { uuid: '' } },
		{ path: '/Products', name: 'Products', component: Products },
		{ path: '/Updates', name: 'Updates', component: Updates },
		{ path: '/Settings', name: 'Settings', component: Settings }
	]
})

// Method without module
// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/components/Home'
// // import Auth from '@/components/Auth'

// Vue.use(Router)

// let routes = [
// 	{ path: '/', name: 'home', component: Home }
// 	// { path: '/login', name: 'auth', component: Auth },
// ]
// // const routes = baseRoutes

// // Import all of the resource routes files.
// const loadRoutes = function () {
// 	const context = require.context('@/components', false, /Base[A-Z]\w+\.(vue|js)$/)
// 	debugger
// 	// const context = require.context('@/components', true)
// 	return context.keys()
// 		.map(context) // import module
// 		.map(m => m.default) // get `default` export from each resolved module
// }

// const resourceRoutes = loadRoutes()
// resourceRoutes.forEach((route) => {
// 	routes.push(route[0])
// })

// export default new Router({
// 	mode: 'history',
// 	routes
// })