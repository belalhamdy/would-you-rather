import React, {Component} from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom'

class Profile extends Component{
    render() {
        return (
            <div>Profile</div>
        )
    }
}
function mapStateToProps ({authedUser, users, questions}, { id }) {
    return{
        users
    }

}
export default connect(mapStateToProps)(Profile);