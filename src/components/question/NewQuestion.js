// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {handleAddQuestion} from "../../actions/question";
import {UNAUTHORIZED} from "../../actions/authedUser";

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.optionOneText = React.createRef();
        this.optionTwoText = React.createRef();
    }


    render() {
        if (this.props.authedUser === UNAUTHORIZED) this.props.history.push("/signin");
        const handleSubmit = (event) => {
            event.preventDefault();
            const {dispatch} = this.props;
            dispatch(handleAddQuestion(this.optionOneText.value, this.optionTwoText.value));
            this.props.history.push(`/`);
        };
        return (
            <div className="new-question">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Option One</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend1">{">"}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Would you rather.."
                                aria-describedby="inputGroupPrepend"
                                required
                                ref={(ref) => {
                                    this.optionOneText = ref
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Option Two</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend2">{">"}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Or.."
                                aria-describedby="inputGroupPrepend"
                                required
                                ref={(ref) => {
                                    this.optionTwoText = ref
                                }}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit" size="lg" block>Add Question</Button>
                </Form>
            </div>
        );
    }

}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);