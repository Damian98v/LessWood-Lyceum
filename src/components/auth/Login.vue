<template>
	Login
	<form @submit.prevent="handleSubmit">
		<input type="email" placeholder="E-mail" v-model="email" required>
		<input type="password" placeholder="Password" v-model="password" required>
		<button>Login</button>
		<div v-if="error">{{ error }}</div>
	</form>
</template>

<script>
// Imports
import { ref } from 'vue';
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const email = ref('')
		const password = ref('')
		const router = useRouter()

		const { login, error, isPending } = useLogin()

		const handleSubmit = async () => {
			await login(email.value, password.value)

			if(!error.value) {
				router.push({ name: 'Dashboard' })
			}
		}


		return { email, password, handleSubmit, error }
	}
}
</script>

<style>

</style>