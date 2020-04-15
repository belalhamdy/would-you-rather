import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import Button from "react-bootstrap/Button";

class QuestionView extends Component {
    render() {
        const {question, author} = this.props;
        const primaryColor = "#AEB6BF",optionOneColor = "#117A65",optionTwoColor = "#CA6F1E";
        return (
            <div className="question" >
                <div>
                    <div className='question-info'>
                        <div>
                            <h1 style={{color: primaryColor,textAlign: "center"}}>{author.name} Asks</h1>
                            <h4 style={{color: primaryColor,textAlign: "center"}}>Would You Rather</h4>
                            <p style={{color: optionOneColor,textAlign: "center"}}>{question.optionOne.text}?</p>
                            <h4 style={{color: primaryColor,textAlign: "center"}}>OR</h4>
                            <p style={{color: optionTwoColor,textAlign: "center"}}>{question.optionTwo.text}?</p>
                        </div>
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