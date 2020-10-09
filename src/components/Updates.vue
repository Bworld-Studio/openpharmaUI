<template>
	<div id="updates" class="container">
			<button class="btn btn-info" v-on:click="updateBDPM('cis')">Update CIS</button>
			<button class="btn btn-info" v-on:click="updateBDPM('cip')">Update CIP</button>
			<button class="btn btn-info" v-on:click="updateBDPM('compo')">Update Compo</button>
			<button class="btn btn-info" v-on:click="updateBDPM('gener')">Update Gener</button>
			<button class="btn btn-info" v-on:click="updateBDPM('cpd')">Update CPD</button>
	</div>
</template>
<script>
const axios = require('axios')
export default {
	name: 'Updates',
	data () {
		return {}
	},
	mounted () {
		// this.updateBDPM()
	},
	methods: {
		updateBDPM (file) {
			var url = '/api/updates/' + file
			// Call API
			axios.put(url).then(
				result => {
					// console.log(result.data)
					// this.clients = result.data
				},
				error => {
					console.error(error)
				}
			)
		}
	}
}
</script>
<style>
</style>