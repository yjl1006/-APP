import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from "../../redux/user.redux"

@withRouter
@connect(
    state=>state.user,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register'];
        if(publicList.indexOf(this.props.location.pathname)>-1){
            return
        }
        axios.get('/user/info')
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    if(res.data.code === 0){
                        this.props.loadData(res.data.data)
                    }else{

                        this.props.history.push('/login')
                    }

                }
            })
    }
    render(){
        return null
    }
}

export default AuthRoute