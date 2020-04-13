import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Navbar, Nav, NavDropdown, NavItem} from 'react-bootstrap';

class NavBar extends Component{
    handleLogout = (e) => {
        // todo handle logout here
        console.log("pressed")
    };
    render() {
        const authorized = this.props.authorized;
        var authedUser = "g";
        var authedUserId = "1";
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="home">Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Add">Add Question</Nav.Link>
                        <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                        {/*     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*     <NavDropdown.Divider />*/}
                        {/*     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/* </NavDropdown>*/}
                    </Nav>
                    <Nav>
                        {authorized  &&  <Nav.Link href = {`/profile/${authedUserId}`}>Hello {authedUser}</Nav.Link>}
                        {authorized  &&   <Nav.Link onClick = {e => this.handleLogout(e)}>Logout</Nav.Link>}
                        {!authorized  && <Nav.Link href = "/signin">Sign In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps ({ authedUser }) {

    return {
        authorized: authedUser !== null
    }
}
export default connect(mapStateToProps)(NavBar);