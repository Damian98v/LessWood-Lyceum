
import { storage } from '@/firebase/config'
import { uploadBytes, ref as storeRef, getDownloadURL } from "firebase/storage";
import getUser from '@/composables/getUser'
import { ref } from "vue";

const { user } = getUser()

const useStorage = () => {
	const error = ref(null)
	const url = ref(null)
	const filePath = ref(null)

	const uploadFile = async (file, folder) => {
		filePath.value = `${folder}/${user.value.uid}/${file.name}`
		const storageRef = storeRef(storage, filePath.value)

		try {
			const res = await uploadBytes(storageRef, file)
			const downloadURL = await getDownloadURL(res.ref)
			url.value = downloadURL
		} catch(error) {
			error.value = error.message
			console.log(error.message)
		}

	}

	return { url, error, filePath, uploadFile }
}

export default useStorage