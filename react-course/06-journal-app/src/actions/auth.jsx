
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from './loading';

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(uiFinishLoading());
            })
    };
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => {
                console.log(e);
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