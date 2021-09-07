import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    // Returns and execute a callback.
    // Thunk give us the dispatch
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    };
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});