import {getQuestions} from "./question";
import {getUsers} from "./users";
import {showLoading,hideLoading} from "react-redux-loading";
import {_getQuestions, _getUsers} from "../utils/_DATA";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions().then((questions) => {
            _getUsers().then((users) =>{
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(hideLoading())
            });
        })

    }
}