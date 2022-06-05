import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from '../views/Authentication.vue'
import Dashboard from '../views/Dashboard.vue'
import RegistrationForm from '../views/RegistrationForm.vue'

// Firebase Import
import { auth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
	let user = auth.currentUser
	if (!user) {
		// redirect
		next({ name: 'Authentication'} )
	} else {
		next()
	}
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
	beforeEnter: requireAuth
  },
  {
    path: '/aanmelden',
    name: 'RegistrationForm',
    component: RegistrationForm,
	beforeEnter: requireAuth
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication,
	meta: {
		hideNavbar: true,
	}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
