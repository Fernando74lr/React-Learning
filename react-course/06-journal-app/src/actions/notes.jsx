import { addDoc, collection } from "@firebase/firestore";
import { types } from '../types/types';
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNote";

export const startNewNote = () => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		const newNode = {
			title: '',
			body: '',
			date: new Date().getTime()
		}

		const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), newNode);

		dispatch(activeNote(doc.id, newNode));
	}
}

export const activeNote = ( id, note ) => ({
	type: types.notesActive,
	payload: {
		id,
		...note
	}
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})