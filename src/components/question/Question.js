import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import NewQuestion from "./NewQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import {isAnsweredQuestion, OPTION_ONE, OPTION_TWO} from "../../actions/question";
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'

class Question extends Component {
    render() {
        const {question, isAnswered,answeredOption} = this.props;
        return (
            <div>
                {isAnswered ? <AnsweredQuestion question = {question} answeredOption = {answeredOption}/>
                : <UnansweredQuestion question = {question}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    console.log("authed" + authedUser)
    const {id} = props.match.params;
    const question = questions[id];
    const isAnswered = isAnsweredQuestion(question, authedUser);
    let answeredOption = '';
    if (isAnswered) {
        answeredOption = OPTION_ONE;
        if (question.optionTwo.votes.includes(authedUser)) answeredOption = OPTION_TWO;
    }
    return {
        question, isAnswered,answeredOption
    }
}

export default connect(mapStateToProps)(Question);