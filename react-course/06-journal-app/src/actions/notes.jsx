import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import { types } from '../types/types';
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNote";
import { toast } from "../helpers/sweetAlert2";
import { fileUpload } from "../helpers/fileUpload";

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
});

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState) => {
        const { uid } = getState().auth;

        const { id, url = null, ...noteToFirestore } = note;

        delete noteToFirestore.id;
        const dbRef = doc(db, `${uid}/journal/notes/${id}`);

        await updateDoc(dbRef, {
            url,
            ...noteToFirestore
        });

        dispatch(refreshNote( id, note ));
        toast('success', 'Saved correctly');
    }
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUpdloading = ( file ) => {
    return async ( dispatch, getState ) => {
        const { active:activeNote } = getState().notes;

        const fileUrl = await fileUpload( file );

        console.log(fileUrl);
    }
}