import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import {Tab, Tabs} from 'react-bootstrap'
import AnsweredQuestionList from "./question/AnsweredQuestionList";
import UnansweredQuestionList from "./question/UnansweredQuestionList";

class Home extends Component {

    render() {
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

function mapStateToProps({authedUser, users, tweets}, {id}) {
    /*const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }*/
}

export default connect(mapStateToProps)(Home);