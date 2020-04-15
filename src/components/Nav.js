import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';

class NavBar extends Component{
    handleLogout = (e) => {
        // todo handle logout here
        console.log("pressed")
    };
    render() {
        const {authorized,authedUser} = this.props;
        return (
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
            </Navbar>
        );
    }
}

function mapStateToProps ({ authedUser }) {
    console.log("h5a " + authedUser);
    return {
        authorized: authedUser !== null,authedUser
    }
}
export default connect(mapStateToProps)(NavBar);