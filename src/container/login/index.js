import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import Logo from '../../component/logo/index'
import {login} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:''
        }
    }
    handleChange(key,e){
        this.setState({
            [key]:e
        })
    }
    register = (q) =>{
        this.props.history.push('/register')
    }
    handleLogin = () =>{
        this.props.login(this.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                <Logo/>

                <WingBlank>
                    <List>
                        {this.props.msg?<p className={'error-msg'}>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={e => this.handleChange('user',e)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type={'password'}
                            onChange={e => this.handleChange('pwd',e)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button
                        type={'primary'}
                        onClick={this.handleLogin}
                    >登录</Button>
                    <WhiteSpace/>
                    <Button
                        type={'primary'}
                        onClick={this.register}
                    >
                        注册
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login