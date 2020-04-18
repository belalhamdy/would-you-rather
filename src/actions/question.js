// Answer question
// Add question
// Get Questions
import {hideLoading, showLoading} from "react-redux-loading";
import {_getUsers, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {getUsers} from "./users";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const OPTION_ONE = "optionOne";
export const OPTION_TWO = "optionTwo";

function answerQuestion({qid, answer, authedUser}) {
    return {
        type: ANSWER_QUESTION, qid, answer, authedUser
    }
}

export function isAnsweredQuestion(question, authedUser) {
    return (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        const question = {qid, answer, authedUser: authedUser};
        return _saveQuestionAnswer(question).then(() => {
            dispatch(answerQuestion(question));
            _getUsers().then((users) => {
                dispatch(getUsers(users));
                dispatch(hideLoading())
            });
        })
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION, question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return _saveQuestion({
            optionOneText, optionTwoText, author: authedUser
        }).then((question) => {
            dispatch(addQuestion(question));
            _getUsers().then((users) => {
                dispatch(getUsers(users));
                dispatch(hideLoading())
            });
        })
    }
}


export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS, questions
    }
}