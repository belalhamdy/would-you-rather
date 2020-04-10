// Answer question
// Add question
// Get Questions
import {showLoading, hideLoading} from "react-redux-loading";
import {_saveQuestion,_saveQuestionAnswer} from "../../utils/_DATA";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const OPTION_ONE = "optionOne";
export const OPTION_TWO = "optionTwo";
function answerQuestion({qid,answer,authedUser}) {
    return{
        type: ANSWER_QUESTION,qid,answer,authedUser
    }
}

export function handleAnswerQuestion({qid,answer}) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return _saveQuestionAnswer({
            qid, answer, authedUser:authedUser
        }).then((question) => dispatch(answerQuestion(question))).then(hideLoading())
    }
}
function addQuestion(question) {
    return{
        type: ADD_QUESTION,question
    }
}
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return _saveQuestion({
            optionOneText, optionTwoText, author:authedUser
        }).then((question) => dispatch(addQuestion(question))).then(hideLoading())
    }
}
export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS, questions
    }
}