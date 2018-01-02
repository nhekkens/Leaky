import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Homescreen from './components/Homescreen.vue';
import AddGame from './components/addGame.vue'


const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Login },
		{ path: '/auth', component: Login },
		{ path: '/games', component: Homescreen },
		{ path: '/addgame', component: AddGame }
	]
});

export default router;