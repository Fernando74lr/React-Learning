
import {
    getAuth,
    signOut,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { toast } from '../helpers/sweetAlert2';
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from './loading';
import { noteLogout } from './notes';

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
                toast('success', `Welcome, ${user.displayName}!`)
            })
            .catch(e => {
                // console.log(e);
                dispatch(uiFinishLoading());
                toast('error', e.message.split(':')[1]);
            })
    };
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                dispatch( login(user.uid, user.displayName) );
                toast('success', `Welcome, ${user.displayName}!`)
            })
            .catch(e => {
                // console.log(e);
                toast('error', e.message.split(':')[1]);
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return (dispatch) => {
        signOut(auth);
        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

export const logout = () =>({
    type: types.logout
})