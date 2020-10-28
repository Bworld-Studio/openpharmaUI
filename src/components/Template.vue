<template>
<!-- Commentaire HTML -->
<div class="container">
	<div class="title">{{$t('global.openPharma')}}</div>
	<div class="title">{{$t(viewLabel)}}</div>
</div>
</template>

<style>

	.title{ color: #cacaca }

</style>
<script>
export default {
	name: 'Tamplate',		// Nom du composant
	data () {
		return {
			// Déclarations des variables de la vue utilisable dans les scripts et le DOM
			viewLabel: 'global.openPharma'
		}
	},
	mounted () {
		// Code executé à l'appel de la vue
		this.getData() // Appel de fonction
	},
	methods: {
		// Fonctions déclarées dans le composants
		getTrucs () {
			console.log('Template: Display stuff in the console')
		}
	}
}
</script>