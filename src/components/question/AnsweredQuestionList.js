import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import NewQuestion from "./NewQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom'
import {isAnsweredQuestion} from "../../actions/question";
import QuestionView from "./QuestionView";

class AnsweredQuestionList extends Component{
    render() {
        return (
            <ul>
                {this.props.questionsIds.map((id) => (
                    <li key={id} >
                        <QuestionView id = {id} answered = {true}/>
                    </li>
                ))
                }
            </ul>)
    }
}

function mapStateToProps ({questions, authedUser }) {
    return {
        authedUser,
        questionsIds: Object.keys(questions).filter(question => isAnsweredQuestion(questions[question],authedUser)).sort((a, b) => questions[b].timeStamp - questions[a].timeStamp)
    }
}
export default connect(mapStateToProps)(AnsweredQuestionList);