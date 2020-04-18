import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import {isAnsweredQuestion, OPTION_ONE, OPTION_TWO} from "../../actions/question";
// eslint-disable-next-line no-unused-vars
import {UNAUTHORIZED} from "../../actions/authedUser";

class Question extends Component {
    render() {
        if (this.props.authedUser === UNAUTHORIZED) this.props.history.push("/signin");
        const {question, isAnswered, answeredOption, notFound,author,authedUser} = this.props;
        if (notFound) return <h1>Error Question not found</h1>;
        return (
            <div>
                {isAnswered ? <AnsweredQuestion question={question} answeredOption={answeredOption} author = {author}/>
                    : <UnansweredQuestion question={question} author = {author} authedUser = {authedUser} history = {this.props.history}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;

    const question = questions[id];
   if (question === undefined) return {
        notFound: true
    };

    const isAnswered = isAnsweredQuestion(question, authedUser);
    let answeredOption = '';
    if (isAnswered) {
        answeredOption = OPTION_ONE;
        if (question.optionTwo.votes.includes(authedUser)) answeredOption = OPTION_TWO;
    }
    return {
        question, isAnswered, answeredOption,author: users[question.author],authedUser
    }
}

export default connect(mapStateToProps)(Question);