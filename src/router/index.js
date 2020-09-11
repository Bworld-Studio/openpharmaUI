import routes from 'vue-auto-routing'

import Vue from 'vue'
import Router from 'vue-router'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
// import Home from '@/components/Home'
// import Clients from '@/components/Clients'
// import Client from '@/components/Client'
// import Products from '@/components/Products'
// import Updates from '@/components/Updates'
// import Settings from '@/components/Settings'

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

export default new Router({
	mode: 'history',
	routes
})

// export default new Router({
// 	mode: 'history',
// 	routes: [
// 		{ path: '/', name: 'Home', component: Home },
// 		{ path: '/Clients', name: 'Clients', component: Clients },
// 		{ path: '/Client/:uuid', name: 'Client', component: Client, props: { uuid: '' } },
// 		{ path: '/Products', name: 'Products', component: Products },
// 		{ path: '/Updates', name: 'Updates', component: Updates },
// 		{ path: '/Settings', name: 'Settings', component: Settings }
// 	]
// })

// const requireComponent = require.context(
// 	// Le chemin relatif du dossier composants
// 	'./components',
// 	// Suivre ou non les sous-dossiers
// 	false,
// 	// L'expression régulière utilisée pour faire concorder les noms de fichiers de composant de base
// 	/Base[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
// // 	// Récupérer la configuration du composant
// // const componentConfig = requireComponent(fileName)

// // 	// Récupérer le nom du composant en PascalCase
// // 	const componentName = upperFirst(
// // 		camelCase(
// // 			// Retrouver le nom du fichier indépendemment de la profondeur de dossier
// // 			fileName
// // 				.split('/')
// // 				.pop()
// // 				.replace(/\.\w+$/, '')
// // 		)
// // 	)

// // 	// Créer un composant global
// // 	Vue.component(
// // 		componentName,
// // 		// Chercher les options du composant dans `.default`, qui
// // 		// existera si le composant a été exporté avec `export default`,
// // 		// sinon revenez à la racine du module.
// // 		componentConfig.default || componentConfig
// // 	)
// })