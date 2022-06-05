<template>
	<div class="container">
		<div v-if="!showLogin" class="authentication">
			<Login />
			<p>Nog geen account? <span @click="toggleLogin">Account aanmaken</span></p>
		</div>
		<div v-else class="authentication">
			<Signup />
			<p>Heb je al een account? <span @click="toggleLogin">Log in</span></p>
		</div>
	</div>
</template>

<script>
// Import Component
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'

// Imports
import { ref } from 'vue';

export default {
	components: { Login, Signup },
	setup() {
		const showLogin = ref(false)

		// Onclick will change Auth input fields screen
		const toggleLogin = () => {
			showLogin.value = !showLogin.value
		}

		return { showLogin, toggleLogin }
	}
}
</script>

<style scoped>
.container {
	background: lightgray;
	height: 100vh;
}

.authentication {
	background-color: #fff;
	width: 80%;
	padding: 20px;
	margin: 0 auto;
}

span {
	font-weight: bold;
	cursor: pointer;
}
</style>