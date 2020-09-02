<template>
	<div id="products-list" class="container">
		<div>
			<div class="">
				<h1 class="text-center">Settings</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Settings',
	data () {
		return { }
	},
	mounted () {
		console.log('Settings')
		// for (var property in this.$i18n.messages) {
		// 	if (this.$i18n.messages.hasOwnProperty(property)) {
		// 		this.langs.push({ 'lang': property, 'locale': this.$i18n.messages[property].global.locale })
		// 	}
		// }
	}
}
</script>

<style>

</style>