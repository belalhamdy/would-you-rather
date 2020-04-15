import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import LoadingBar from "react-redux-loading";

class AnsweredQuestion extends Component{
    render() {
        const {question,answeredOption} = this.props;
        return (
            <div>
                <div>{question.author}</div>
                <div>{answeredOption}</div>
            </div>
        )
    }
}
function mapStateToProps ({questions, authedUser},{id}) {
   // const question = questions[id];

    return{
        //question
    }
}
export default connect(mapStateToProps)(AnsweredQuestion);