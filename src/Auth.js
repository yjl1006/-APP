import React from 'react'
import {connect} from 'react-redux'
import {login,getUserData} from './Auth.redux'
import axios from 'axios'

@connect(
    state=>state.auth,
    {login,getUserData}
)
class Auth extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
        this.props.getUserData()
    }
    render(){
        return (
            <div>
                <h2>登录</h2>
            </div>
        )
    }
}

export default Auth