import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import {setAuthedUser, UNAUTHORIZED} from "../actions/authedUser";

class NavBar extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(setAuthedUser(UNAUTHORIZED));
    };

    render() {
        const {authorized, authedUser} = this.props;
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>Would You Rather</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Add">
                            <Nav.Link>Add Question</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Leaderboard">
                            <Nav.Link>Leaderboard</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Navbar.Toggle/>
                        {authorized &&
                        <LinkContainer to={`/profile/${authedUser}`}>
                            <Nav.Link>Hello {authedUser}</Nav.Link>
                        </LinkContainer>}
                        {authorized &&
                        <LinkContainer to="/">
                            <Nav.Link onClick={e => this.handleLogout(e)}>Logout</Nav.Link>
                        </LinkContainer>}
                        {!authorized &&
                        <LinkContainer to="/signin">
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({authedUser}) {

    return {
        authorized: authedUser !== '', authedUser
    }
}

export default connect(mapStateToProps)(NavBar);