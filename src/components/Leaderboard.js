import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import {isAnsweredQuestion} from "../actions/question";
import QuestionView from "./question/QuestionView";
import Profile from "./Profile";

class Leaderboard extends Component {
    render() {
        let rank = 1;
        return (
            <ul>
                {this.props.usersIds.map((id) => (
                    <Link to={`/profile/${id}`}>
                        <li key={id}>
                            <Profile user={this.props.users[id]} rank={rank++}/>
                        </li>
                    </Link>))}
            </ul>)
    }
}

function mapStateToProps({users}) {
    const getScore = (user) => {
        return Object.keys(user.answers).length - user.questions.length;
    };
    return {
        usersIds: Object.keys(users).sort((a, b) => getScore(users[b]) - getScore(users[a])), users
    }
}

export default connect(mapStateToProps)(Leaderboard);