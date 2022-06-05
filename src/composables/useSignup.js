import { ref } from "vue";

// Firebase Imports
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
	error.value = null
	isPending.value = true

	try {
		const res = await createUserWithEmailAndPassword(auth, email, password)
		if (!res) {
			throw new Error('Kon het account niet aanmaken')
		}

		await updateProfile(res.user, { displayName: displayName })

		error.value = null
		isPending.value = false

	} catch (err) {
		error.value = err.message
		isPending.value = false
	}
}

const useSignup = () => {
	return { error, isPending, signup }
}

export default useSignup