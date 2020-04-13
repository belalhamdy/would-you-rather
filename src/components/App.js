import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import NavBar from "./Nav";
import Home from "./Home";
import Question from "./question/Question"
import SignIn from "./SignIn";
import {setAuthedUser} from "../actions/authedUser";
import NewQuestion from "./question/NewQuestion";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";
import authedUser from "../reducers/authedUser";


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    this.props.dispatch(setAuthedUser("sarahedo"));

  }
  render() {
    return (
        <Router>
            <Fragment>
                <div className='container'>
                    <NavBar />
                    <LoadingBar />
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Home} />
                            <Route path='/home' exact component={Home} />
                            <Route path='/question/:id' component={Question} />
                            <Route path='/profile/:id' component={Profile} />
                            <Route path='/add' component={NewQuestion} />
                            <Route path='/leaderboard' component={Leaderboard} />
                            <Route path='/signin' component={SignIn} />
                        </div>}
                </div>
            </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ({questions, authedUser }) {
  return {
      authorized: authedUser !== null,
      loading: questions === null
  }
}

export default connect(mapStateToProps)(App)