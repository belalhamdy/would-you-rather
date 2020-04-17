import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import Button from "react-bootstrap/Button";


class QuestionView extends Component {
    render() {
        const {question, author} = this.props;
        return (
            <div className="question" >
                <div>
                    <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar'
                    />
                    <div className='question-info'>
                        <div>
                            <h1>{author.name} Asks</h1>
                            <div className="separator"/>
                            <h4>Would You Rather</h4>
                            <p className="optionOne">{question.optionOne.text}?</p>
                            <h4>OR</h4>
                            <p className="optionTwo">{question.optionTwo.text}?</p>
                        </div>
                        <div className="separator"/>
                    </div>
                </div>
                <div>
                    <Link to={`/question/${question.id}`} className='question-btn'>
                        <Button variant="secondary" size="lg" block>
                            View
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    const question = questions[id];

    return {
        question, author: users[question.author]
    }
}

export default connect(mapStateToProps)(QuestionView);