import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component{
    render() {
        return (
            <div>Nav</div>
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
export default connect(mapStateToProps)(Nav);