<template>
	<nav class="navbar navbar-default">
		<div class="container">

			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/"><a class="navbar-brand">Leaky</a></router-link>
			</div>

			<div id="navbar" class="collapse navbar-collapse">
				
				<ul class="nav navbar-nav">
					<li class="ok">
						<router-link to="/">Season Overview</router-link>
					</li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					<li role="presentation">
						<AddGame></AddGame>
					</li>
					<li class="ok">
						<span class="badge badge-primary" style="margin-top: 2px;">
							<h4>{{name}}</h4>
						</span>
					</li>
					<li class="ok">
						<img :src="photo" style='height: 50px'>
					</li>
					<li role="presentation">
						<a  href="#" @click='logOut'>Log out</a>
					</li>
				</ul>

			</div><!--/.nav-collapse -->
		</div>
	</nav>
</template>

<script>
	import firebase from 'firebase'
	import AddGame from './addGame.vue'

	export default {
		data() {
			return {
				photo: '',
				userId: '',
				name: '',
				email: '',
				user: {},
			}
		},
		created() {
			var vm = this
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					vm.user = user;
					vm.name = vm.user.displayName;
					vm.email = vm.user.email;
					vm.photo = vm.user.photoURL;
					vm.userId = vm.user.uid;
				}
			});
		},
		methods: {
			logOut() {
				firebase.auth().signOut();
			}
		},
		components:{
			AddGame
		}
	};
</script>

<style>

</style>
