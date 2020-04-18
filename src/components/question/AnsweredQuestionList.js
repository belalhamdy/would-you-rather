import React, {Component} from 'react'
import {connect} from 'react-redux'
import {isAnsweredQuestion} from "../../actions/question";
import QuestionView from "./QuestionView";

class AnsweredQuestionList extends Component{
    render() {
        return (
            <ul className="dashboard-list">
                {this.props.questionsIds.map((id) => (
                    <li key={id} >
                        <QuestionView id = {id}/>
                    </li>
                ))
                }
            </ul>)
    }
}

function mapStateToProps ({questions, authedUser }) {
    return {
        authedUser,
        questionsIds: Object.keys(questions).filter(question => isAnsweredQuestion(questions[question], authedUser)).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(AnsweredQuestionList);