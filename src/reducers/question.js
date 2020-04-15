// Answer question
// Add question
// Get Questions
// export const ANSWER_QUESTION = "ANSWER_QUESTION";
// export const ADD_QUESTION = "ADD_QUESTION";
// export const GET_QUESTIONS = "GET_QUESTIONS";

import {ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS} from "../actions/question";

export default function questions(state = null, action) {
    switch (action.type) {
        case ANSWER_QUESTION:
            return {
                ...state, [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: [action.answer].concat(action.authedUser)
                }
            };
        case ADD_QUESTION:
            const {question} = action;
            return {...state, [question.id]: question};
        case GET_QUESTIONS:
            return {...state, ...action.questions};
        default:
            return state;
    }
}