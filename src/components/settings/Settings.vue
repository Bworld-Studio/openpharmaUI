<template>
	<div id="products-list" class="container">
		<div>
			<div class="">
				<h1 class="text-center">Settings</h1>
			</div>
			<div class="navbar-nav mr-auto locale-changer">
				<select v-model="$i18n.locale" class="form-control-sm">
					<option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.lang">{{ lang.locale }}</option>
				</select>
			</div>
		</div>
	</div>
</template>

<style>

</style>

<script>
export default {
	name: 'Settings',
	data () {
		return {
			langs: []
		}
	},
	mounted () {
		console.log('App monted')
		this.getLocalesList()
	},
	methods: {
		getLocalesList () {
			for (var property in this.$i18n.messages) {
				if (this.$i18n.messages.hasOwnProperty(property)) {
					this.langs.push({ 'lang': property, 'locale': this.$i18n.messages[property].global.locale })
				}
			}
		}
	}
}
</script>