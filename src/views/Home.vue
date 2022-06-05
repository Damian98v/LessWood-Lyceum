<template>
	<div v-if="user">
		Welkom {{ user.displayName }}
	</div>
	<div v-else>
		Welkom op de homepagina
	</div>

</template>

<script>
// Imports
import getUser from '@/composables/getUser'

export default {
	setup () {
		const { user } = getUser()
		return { user }
	}
}
</script>
