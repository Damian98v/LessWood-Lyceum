import { ref } from "vue";

// Firebase Imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
	error.value = null
	isPending.value = true

	try {
		const res = await signInWithEmailAndPassword(auth, email, password)
		if (!res) {
			throw new Error('Kon niet inloggen')
		}

		error.value = null
		isPending.value = false

	} catch (err) {
		error.value = err.message
		isPending.value = false
	}
}

const useLogin = () => {
	return { error, isPending, login }
}

export default useLogin