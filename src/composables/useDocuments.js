import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const useDoc = async (doc, col) => {
	try {
		// Storage Import
		console.log(doc, col)
		const docRef = await addDoc(collection(db, col), doc)
		  console.log('Document written with ID: ', docRef.id)
	} catch (error) {
		console.error("Error adding document: ", error)
	}
}

const useDocs = () => {
	return { useDoc }
}

export default useDocs