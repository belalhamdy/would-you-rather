import {GET_USERS} from "../actions/users";

export default function users(state = null, action) {
    if (action.type === GET_USERS) {
        return {...state, ...action.users};
    } else {
        return state;
    }
}