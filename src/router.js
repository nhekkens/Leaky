import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';
import AddGame from './components/addGame.vue'


const router = new VueRouter({
	routes: [
		{ path: '/', component: Auth },
		{ path: '/auth', component: Auth },
		{ path: '/games', component: AuthSuccess },
		{ path: '/addgame', component: AddGame }
	]
});

export default router;