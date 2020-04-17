import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import {isAnsweredQuestion, OPTION_ONE, OPTION_TWO} from "../actions/question";
import Button from "react-bootstrap/Button";

class Profile extends Component {

    render() {
        const {user, rank} = this.props;
        const answersCnt = Object.keys(user.answers).length;
        const questionsCnt = user.questions.length;
        return (
            <div className="profile">
                <div>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                    <h1>{user.name}</h1>
                    <div className='avatar-info'>
                        {rank !== undefined && <h4>Rank: {rank}</h4>}
                        <div>
                            <h3 className="optionOne">Answered Questions: {answersCnt}</h3>
                            <h3 className="optionTwo">Added Questions: {questionsCnt}</h3>
                            <div className="separator"/>
                            <h4>Score: {answersCnt + questionsCnt}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    if (props.match === undefined) return ;
    const {id} = props.match.params;
    const user = users[id];
    if (user === undefined) return {
        notFound: true
    };

    return {
        user
    }
}

export default connect(mapStateToProps)(Profile);