import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {handleAnswerQuestion, OPTION_ONE, OPTION_TWO} from "../../actions/question";

class UnansweredQuestion extends Component {
    constructor(props) {
        super(props);
        this.selectedOption = React.createRef();
        this.selectedOption = "";
    }

    render() {
        const {question, author, dispatch} = this.props;
        const handleSubmit = (event) => {
            event.preventDefault();
            if (this.selectedOption !== OPTION_ONE && this.selectedOption !== OPTION_TWO) {
                alert("You Have to Choose an Option");
            } else {
                dispatch(handleAnswerQuestion(question.id, this.selectedOption));
            }
        };
        return (
            <div>
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
                                    <fieldset>
                                        <Form.Group>
                                            <div className="optionOneRadio">
                                                <Form.Check type="radio" label={question.optionOne.text} name="optionsGroup"
                                                            id="optionOneRadio" onChange={() => {this.selectedOption = OPTION_ONE; }} />
                                            </div>
                                            <div className="optionTwoRadio">
                                                <Form.Check type="radio" label={question.optionTwo.text} name="optionsGroup"
                                                            id="optionTwoRadio" onChange={() => {this.selectedOption = OPTION_TWO; }} />
                                            </div>
                                        </Form.Group>
                                    </fieldset>
                                </div>
                                <div className="separator"/>
                            </div>
                        </div>
                        <Button type="submit" size="lg" block>Submit Vote</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default connect()(UnansweredQuestion);