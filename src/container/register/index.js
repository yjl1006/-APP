import React from 'react'
import {Redirect} from 'react-router-dom'
import {Button, InputItem, List, WhiteSpace, WingBlank,Radio} from "antd-mobile";
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";
import Logo from '../../component/logo/index'

const RadioItem = Radio.RadioItem

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type:'genuis',
            pwd:'',
            user:'',
            repeatPwd:''
        }
    }
    handleChange(key,e){
        this.setState({
            [key]:e
        })
    }
    handleRegister = () => {
        this.props.register(this.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                <Logo/>

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
                    <WhiteSpace/>
                    <InputItem
                        type={'password'}
                        onChange={e => this.handleChange('repeatPwd',e)}
                    >确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        checked={this.state.type === 'genuis'}
                        onChange={e => this.handleChange('type','genuis')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type === 'boss'}
                        onChange={e => this.handleChange('type','boss')}
                    >
                        BOSS
                    </RadioItem>
                </List>
                <WhiteSpace/>
                <Button
                    type={'primary'}
                    onClick={this.handleRegister}
                >
                    注册
                </Button>
                <WhiteSpace/>
                <Button type={'primary'}>登录</Button>
                <WhiteSpace/>


            </div>
        )
    }
}

export default Register