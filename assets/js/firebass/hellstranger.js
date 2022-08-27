import app from './app.js'
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'




export async function subscribehellstranger(subscription){
    const db = getFirestore(app)
    const hellstrangercollection = collection  (db, 'hellstranger')
     const docRef = await addDoc(hellstrangercollection, subscription)
     return docRef.id


}