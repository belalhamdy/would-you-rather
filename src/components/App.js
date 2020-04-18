import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import NavBar from "./Nav";
import Home from "./Home";
import Question from "./question/Question"
import SignIn from "./SignIn";
import NewQuestion from "./question/NewQuestion";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";


const NotFound = () => <div><h1 className="notFound">Error 404</h1> <p className="notFoundP">Page is Not Found</p>
</div>;

const NotFoundRedirect = () => <Redirect to='/not-found'/>;

class App extends Component {

    componentDidMount() {
        if (this.props.loading) {
            this.props.dispatch(handleInitialData());
        }

    }
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <NavBar/>
                        <LoadingBar/>
                        {this.props.loading === true ? <h1 className="notFound">Loading</h1>
                            : (<div>
                                <Switch>
                                    <Route path='/' exact component={Home}/>
                                    <Route path='/home' exact component={Home}/>
                                    <Route path='/question/:id' component={Question}/>
                                    <Route path='/profile/:id' component={Profile}/>
                                    <Route path='/add' component={NewQuestion}/>
                                    <Route path='/leaderboard' component={Leaderboard}/>
                                    <Route path='/signin' component={SignIn}/>
                                    <Route path='/not-found' component={NotFound}/>
                                    <Route component={NotFoundRedirect}/>
                                </Switch>
                            </div>)}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({questions, authedUser}) {

    return {
        authorized: authedUser !== '',
        loading: questions === null
    }
}

export default connect(mapStateToProps)(App)