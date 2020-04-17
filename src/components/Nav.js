import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

class NavBar extends Component {
    handleLogout = (e) => {
        // todo handle logout here
        console.log("pressed")
    };

    render() {
        const {authorized, authedUser} = this.props;
        return (/*
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Add">Add Question</Nav.Link>
                        <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        {authorized  &&  <Nav.Link href = {`/profile/${authedUser}`}>Hello {authedUser}</Nav.Link>}
                        {authorized  &&   <Nav.Link onClick = {e => this.handleLogout(e)}>Logout</Nav.Link>}
                        {!authorized  && <Nav.Link href = "/signin">Sign In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>*/

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
                        {authorized &&
                        <LinkContainer to={`/profile/${authedUser}`}>
                            <Nav.Link>Hello {authedUser}</Nav.Link>
                        </LinkContainer>}
                        {authorized &&
                        <LinkContainer to="/signin">
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
        authorized: authedUser !== null, authedUser
    }
}

export default connect(mapStateToProps)(NavBar);