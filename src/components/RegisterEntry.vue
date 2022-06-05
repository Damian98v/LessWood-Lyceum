<template>
	<form @submit.prevent="handleSubmit">
		<input type="file" @change="handleChange" required>
		<input type="file" @change="handleChange" required>
		<input type="file" @change="handleChange" required>
		<button>upload doc</button>
		<div>{{ fileError }}</div>
	</form>
</template>

<script>
// Import
import useDocs from '@/composables/useDocuments'
import useStorage from '@/composables/useStorage'
import getUser from '@/composables/getUser'
import { ref } from 'vue'

export default {
	setup() {
		const { useDoc } = useDocs()
		const { uploadFile, filePath, url, error } = useStorage()

		const { user } = getUser()

		// File import
		const file = ref([])
		const fileError = ref(null)
		const pathArray = ref([])
		const urlArray = ref([])

		const col = ref('aanmelding')

		const doc = ref({
			naam: user.value.displayName,
			filePath: pathArray,
			url: urlArray
		})


		// Add to collection
		const handleSubmit = async () => {
			if (file.value) {
				console.log(file.value)
				// Loop door de files heen uit de file array
				for (let i = 0; i < file.value.length; i++) {
					await uploadFile(file.value[i], 'files-'+[i])
					pathArray.value.push(filePath.value)
					urlArray.value.push(url.value)
				}

				await useDoc(doc.value, col.value)

				if(!error.value) {
					console.log('Aanmelding toegevoegd')
				}
			}
		}

		// Allowed file types + put files into file object
		const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/pdf']

		// Om de files op te halen uit de input type file
		const handleChange = (e) => {
			// waarde van de input wordt in de E geplaatst
			const selected = e.target.files

			for (let i = 0; i < selected.length; i++) {
				const select = selected[i]
				if(select && types.includes(select.type)) {
					// Plaats gekozen bestanden in een array
					file.value.push(select)
					fileError.value = null
				} else {
					file.value = null
					fileError.value  = "Kies een afbeelding (PNG of JPG) A.U.B"
				}
			}
		}

		return { handleSubmit, handleChange, fileError }
	}
}
</script>

<style>

</style>