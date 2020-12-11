<template>
<div id="app">
	<nav class="navbar navbar-expand navbar-dark bg-dark container-fluid">
		<div>
			<a href="/" class="navbar-brand" style="font-family:'Ubuntu Medium">
				<img src="@/assets/logo.png" style="margin-right: 8px; width:41px">
				<span>{{ $t('global.openPharma') }}</span>
				<span class="version_number">ui 0.1.2</span>
			</a>
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a href="/Clients" class="nav-link">{{ $t('clients.menu') }}</a>
				</li>
				<li class="nav-item">
					<a href="/Products" class="nav-link">{{ $t('products.menu') }}</a>
				</li>
				<li class="nav-item">
					<a href="/Orders" class="nav-link">{{ $t('orders.menu') }}</a>
				</li>
				<li class="nav-item">
					<a href="/Updates" class="nav-link">{{ $t('updates.menu')}}</a>
				</li>
				<li class="nav-item">
					<a href="/Settings" class="nav-link">{{ $t('settings.menu') }}</a>
				</li>
			</ul>
		</div>
		<div>
			<form class="input-group">
				<div class="d-flex">
				<input class="form-control-sm" type="search" v-bind:placeholder="$t('search.placeholder-input')" aria-label="Search" aria-describedby="button-addon2">
				<div class="input-group-append">
					<button class="btn btn-success btn-sm my-2 my-sm-0 btn-outline-secondary" type="button" id="button-addon2" v-on:click="search()">
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
							<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg>
					</button> <!-- {{$t('buttons.search-button')}} -->
				</div>
				</div>
			</form>
		</div>
		<!-- <div class="navbar-nav mr-auto locale-changer">
			<select v-model="$i18n.locale" class="form-control-sm">
				<option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.lang">{{ lang.locale }}</option>
			</select>
		</div> -->
	</nav>

	<!-- Container VueJS -->
	<div class="container-fluid">
		<router-view/>
	</div>
</div>
</template>

<script>
const axios = require('axios')

export default {
	name: 'App',
	data () {
		return {
			status: undefined
		}
	},
	mounted () {
		console.log('App monted')
		this.getBackEndStatus()
	},
	methods: {
		search () {

		},
		getBackEndStatus () {
			axios.get('/api/sataus').then(
				result => {
					if (result === 200) this.status = true
				},
				error => {
					console.error(error)
					this.status = false
				}
			)
		}
	}
}
</script>

<style>
#app {
	font-family: 'OpenSans', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
@font-face {
	font-family: "Ubuntu Medium";
	src: url("~@/assets/fonts/Ubuntu-Medium.ttf") format('truetype');
}
@font-face {
	font-family: "OpenSans";
	src: url("~@/assets/fonts/OpenSans-Regular.ttf") format('truetype');
}
.version_number {
	font-size: 0.8rem;
	color: grey;
}
</style>