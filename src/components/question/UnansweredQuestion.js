import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {Link, withRouter} from 'react-router-dom'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {handleAnswerQuestion, OPTION_ONE, OPTION_TWO} from "../../actions/question";
import {Col, FormGroup, Row} from "react-bootstrap";

class UnansweredQuestion extends Component {
    constructor(props) {
        super(props);
        this.selectedOption = React.createRef();
        this.selectedOption = "";
    }

    render() {
        const {question, author,dispatch} = this.props;
        const handleSubmit = (event) => {
            event.preventDefault();
            if (this.selectedOption !== OPTION_ONE && this.selectedOption !== OPTION_TWO) {
                alert("You Have to Choose an Option");
            } else {
                dispatch(handleAnswerQuestion(question.id,this.selectedOption));
                //this.props.history.push(`/`);
            }
        };
        return (
            <div className="new-question">
                <Form onSubmit={handleSubmit}>
                    <div className="question">
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
                            </div>
                        </div>
                        <div className="separator"/>
                        <div>
                            <Link to={`/question/${question.id}`} className='question-btn'>
                                <Button variant="secondary" size="lg" block>
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <fieldset>
                        <Form.Group>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={() => {
                                    this.selectedOption = OPTION_ONE;
                                }}
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange={() => {
                                    this.selectedOption = OPTION_TWO;
                                }}
                            />
                        </Form.Group>
                    </fieldset>
                    <Button type="submit" size="lg" block>Submit Vote</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(UnansweredQuestion);