import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {setAuthedUser, UNAUTHORIZED} from "../actions/authedUser";
import {Redirect} from "react-router-dom";

const defaultSelect = "Select...";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.selected = React.createRef();
        this.selected = defaultSelect;

    }


    render() {
        if (this.props.authedUser !== UNAUTHORIZED) {
            return <Redirect to='/'/>
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            if (this.selected === defaultSelect) alert("Please Select a user");
            else {
                const {dispatch} = this.props;
                dispatch(setAuthedUser(this.selected));
                this.props.history.push(`/`);
            }


        };
        const handleChange = (event) => {
            this.selected = event.target.value;
        };
        return (
            <div className="new-question">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Choose User</Form.Label>
                        <Form.Control as="select" onChange={handleChange} value={this.selected.value}>
                            <option key="default" value={defaultSelect}>{defaultSelect}</option>
                            {this.props.usersIds.map((id) => (
                                <option key={id} id={id}>
                                    {id}
                                </option>))}
                        </Form.Control>
                        <Button type="submit" size="lg" block>Login</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {

    return {
        authedUser,
        usersIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(SignIn)