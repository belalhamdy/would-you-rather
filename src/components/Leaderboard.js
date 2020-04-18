import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import Profile from "./Profile";
import {UNAUTHORIZED} from "../actions/authedUser";

class Leaderboard extends Component {
    render() {
        if (this.props.authedUser === UNAUTHORIZED) {
            return <Redirect to='/signin'/>
        }

        let rank = 1;
        return (
            <ul>
                {this.props.usersIds.map((id) => (
                    <Link to={`/profile/${id}`} key={id}>
                        <li key={id}>
                            <Profile user={this.props.users[id]} rank={rank++}/>
                        </li>
                    </Link>))}
            </ul>)
    }
}

function mapStateToProps({users, authedUser}) {

    const getScore = (user) => {
        return (Object.keys(user.answers).length + user.questions.length);
    };
    return {
        usersIds: Object.keys(users).sort((a, b) => getScore(users[b]) - getScore(users[a])),
        users, authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard);