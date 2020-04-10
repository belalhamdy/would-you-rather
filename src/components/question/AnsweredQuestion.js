import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom'
import LoadingBar from "react-redux-loading";

class AnsweredQuestion extends Component{
    render() {
        return (
            <div>Answered Question</div>
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
export default connect(mapStateToProps)(AnsweredQuestion);