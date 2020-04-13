import React, {Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import NewQuestion from "./NewQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom'

class Question extends Component{
    render() {
        return (
            <div>
            <AnsweredQuestion/>
            <UnansweredQuestion/>
            <NewQuestion/>
            </div>
        )
    }
}
function mapStateToProps ({authedUser, users, tweets}, { id }) {
    /*const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }*/
}
export default connect(mapStateToProps)(Question);