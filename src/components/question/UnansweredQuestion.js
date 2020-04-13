import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom'

class AnsweredQuestion extends Component{
    render() {
        const {question} = this.props;
        return (
            <div>
                <div>{question.author}</div>
            </div>
        )
    }
}
function mapStateToProps ({questions, authedUser},{id}) {
    const question = questions[id];
    return{
        question
    }
}
export default connect(mapStateToProps)(AnsweredQuestion);