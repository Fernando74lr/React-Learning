import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const newNode = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), newNode);

        console.log("Document written with ID: ", doc);
    }
}