import { ref } from "vue";

// Firebase Imports
import { signOut } from "firebase/auth";
import { auth } from '@/firebase/config'

const signout = () => {
	signOut(auth)
}

const useSignout = () => {
	return { signout }
}

export default useSignout