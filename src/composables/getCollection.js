import { collection, onSnapshot  } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { ref, watchEffect } from 'vue'

const getCollection = (col) => {
	const documents = ref(null)

	// collection reference
	let colRef = collection(db, col)

	const unsub = onSnapshot(colRef, snapshot => {
		let results = []
		snapshot.docs.forEach(doc => {
			results.push({ ...doc.data(), id: doc.id })
		})

		// Update values
		documents.value = results
	})

	watchEffect((onInvalidate) => {
		onInvalidate(() => unsub())
	})

	return { documents }
}

export default getCollection
