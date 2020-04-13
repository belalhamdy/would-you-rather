import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'

class QuestionView extends Component {
    render() {
        const {question, answered} = this.props;
        var bgColor = answered ? "#ABEBC6" : "#F5B7B1";
        return (
            <div>
                <h1 style={{ color: bgColor }}>{question.id}</h1>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, {id, answered}) {
    const question = questions[id];
    return {
        question, answered
    }
}

export default connect(mapStateToProps)(QuestionView);