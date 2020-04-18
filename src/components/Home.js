import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tab, Tabs} from 'react-bootstrap'
import AnsweredQuestionList from "./question/AnsweredQuestionList";
import UnansweredQuestionList from "./question/UnansweredQuestionList";
import {UNAUTHORIZED} from "../actions/authedUser";
import {Redirect} from "react-router-dom";

class Home extends Component {

    render() {
        if (this.props.authedUser === UNAUTHORIZED) {
            return <Redirect to='/signin'/>
        }
        return (
            <div>
                <Tabs defaultActiveKey="UnansweredQuestions" id="uncontrolled-tab">
                    <Tab eventKey="UnansweredQuestions" title="Unanswered Questions">
                        <UnansweredQuestionList/>
                    </Tab>
                    <Tab eventKey="AnsweredQuestions" title="Answered Questions">
                        <AnsweredQuestionList/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Home);