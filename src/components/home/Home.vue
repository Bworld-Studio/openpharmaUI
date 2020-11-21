<template>
<div class="container">
	<div class="card" v-for="(view) in views" :key="view.id" style="width: 25rem;"> <!-- v-bind:key="view.id" v-bind:title="{{$t(view.label)}}" -->
		<div class="card-body">
			<h5 class="card-title">{{$t(view.title)}}</h5>
			<p class="card-text">{{$t(view.text)}}</p>
			<a v-bind:href="view.path1" class="card-link">{{$t(view.action1)}}</a>
			<a v-bind:href="view.path2" class="card-link">{{$t(view.action2)}}</a>
		</div>
	</div>
</div>
</template>

<style>

</style>

<script>
export default {
	name: 'Home',
	data () {
		return {
			views: [
				{ id: 'Clients', title: 'clients.title', text: 'clients.text', action1: 'clients.action1', path1: '/Clients', action2: 'clients.action2', path2: '/Client' },
				{ id: 'Products', title: 'products.title', text: 'products.text', action1: 'products.action1', action2: 'products.action2' }
			]
		}
	},
	mounted () {

	},
	methods: {

	}
}
</script>