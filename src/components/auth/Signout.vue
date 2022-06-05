<template>
	<p @click="handleClick">Uitloggen</p>
</template>

<script>
// Imports
import useSignout from '@/composables/useSignout'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const { signout } = useSignout()

		const router = useRouter()

		const handleClick = () => {
			signout()
			router.push({ name: 'Authentication' })
		}

		return { handleClick }
	}
}
</script>

<style>
p {
	cursor: pointer
}
</style>