import { addDoc, collection, doc, updateDoc, deleteDoc } from "@firebase/firestore";
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

        dispatch( startLoadingNotes( uid ) );
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

        toast('info', 'Uploading...');

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote(activeNote) );
    }
}

export const startDeleting = ( id ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const dbRef = doc(db, `${uid}/journal/notes/${id}`);
        await deleteDoc(dbRef);

        toast('success', 'Deleted correctly!');
        dispatch( deleteNote(id) );
    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});