// set authed user
// Logout
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT = "LOGOUT";
export const UNAUTHORIZED = "";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

