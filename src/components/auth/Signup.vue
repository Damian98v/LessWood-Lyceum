<template>
	Maak een account aan
	<form @submit.prevent="handleSubmit">
		<input type="text" placeholder="Gebruikersnaam" v-model="displayName" required>
		<input type="email" placeholder="E-mail" v-model="email" required>
		<input type="password" placeholder="Wachtwoord" v-model="password" required>
		<button>Signup</button>
		<div v-if="error">{{ error }}</div>
	</form>
</template>

<script>
// Imports
import { ref } from 'vue';
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/config'
import { updateProfile } from '@firebase/auth';

export default {
	setup() {
		const email = ref('')
		const password = ref('')
		const displayName = ref('')
		const router = useRouter()

		const { signup, error, isPending } = useSignup()

		const handleSubmit = async () => {
			await signup(email.value, password.value, displayName.value)

			if(!error.value) {
				router.push({ name: 'Home' })
			}
		}


		return { email, password, handleSubmit, error, displayName }
	}
}
</script>

<style>

</style>