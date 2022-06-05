import { ref } from "vue";

// Firebase Imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase/config'

const user = ref(auth.currentUser)

// Auth changes
onAuthStateChanged(auth, (_user) => {
	user.value = _user
})

const getUser = () => {
	return { user }
}

export default getUser