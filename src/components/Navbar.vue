<template>
	<nav>
		<router-link :to="{ name: 'Home' }">Home Nieuw</router-link>
		<div v-if="!user">
			<router-link :to="{ name: 'Authentication' }">Login / Aanmelden</router-link>
		</div>
		<div v-else>
			<router-link :to="{ name: 'RegistrationForm' }">RegistrationForm</router-link>
			<router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
			<Signout />
		</div>
	</nav>
</template>

<script>
// Imports
import Signout from '@/components/auth/Signout'
import getUser from '@/composables/getUser'

export default {
	components: { Signout },
	setup () {
		const { user } = getUser()

		return { user }
	}
}
</script>

<style scoped>
nav {
	width: 100%;
	padding: 10px 30px;
	background-color: #fff;

	/* Flex */
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>