<template>
	<RegisterEntry />
	<div v-for="doc in documents" :key="doc.id">
		<div>
			<h3>{{ doc.naam }}</h3>
			<div v-for="url in doc.url" :key="url">
				<img :src="url" alt="LessWood Lyceum Files" width="100">
			</div>
		</div>
	</div>
</template>

<script>
// Imports
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import RegisterEntry from '@/components/RegisterEntry'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'

export default {
	components: { RegisterEntry },
	setup () {
		const { user } = getUser()
		const { documents } = getCollection('aanmelding')
		const router = useRouter()

		// Extra check voor de route guard
		watchEffect(() => {
			if(!user.value) {
				router.push({ name: 'Authentication' })
			}
		})

		return { documents, user }
	}
}
</script>

<style>

</style>