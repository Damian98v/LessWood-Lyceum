import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAMgj5PmRhobSyJbB3vh6BpDSK3YS0qARU",
	authDomain: "lesswood-lyceum.firebaseapp.com",
	projectId: "lesswood-lyceum",
	storageBucket: "lesswood-lyceum.appspot.com",
	messagingSenderId: "1051169359236",
	appId: "1:1051169359236:web:75cb10ea65a229d03b89d1"
};

// Initialize Firebase
// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export { db, auth, storage }