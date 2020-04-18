import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Tab, Tabs} from 'react-bootstrap'
import AnsweredQuestionList from "./question/AnsweredQuestionList";
import UnansweredQuestionList from "./question/UnansweredQuestionList";
import {UNAUTHORIZED} from "../actions/authedUser";

class Home extends Component {

    render() {
        if (this.props.authedUser === UNAUTHORIZED) this.props.history.push("/signin");
        return (
            <div>
                <Tabs defaultActiveKey="AnsweredQuestions" id="uncontrolled-tab" >
                    <Tab eventKey="AnsweredQuestions" title="Answered Questions">
                        <AnsweredQuestionList/>
                    </Tab>
                    <Tab eventKey="UnansweredQuestions" title="Unanswered Questions">
                        <UnansweredQuestionList/>
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