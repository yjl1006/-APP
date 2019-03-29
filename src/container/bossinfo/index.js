import React from 'react'
import {NavBar,Icon,List,InputItem,TextareaItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'

import {update} from '../../redux/user.redux'

import AvatarSelector from '../../component/avatarSelector/index'

@connect(
    state=>state.user,
    {update}
)
class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            company:'',
            money:'',
            decs:'',
            avatar:''
        }
    }
    handleChange(key,e){
        this.setState({
            [key]:e
        })
    }
    selectorAvatar(e){
        this.setState({
            avatar:e
        })
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <NavBar mode="dark">BOSS完善信息页面</NavBar>
                <AvatarSelector
                    selectorAvatar={(e) => this.selectorAvatar(e)}
                />
                <InputItem onChange={(v) => this.handleChange('title',v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange={(v) => this.handleChange('company',v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v) => this.handleChange('money',v)}>
                    职位薪资
                </InputItem>
                <TextareaItem
                    onChange={(v) => this.handleChange('decs',v)}
                    rows={3}
                    autoHeight
                    title={'职位要求'}
                />
                <Button
                    type={'primary'}
                    onClick={() => this.props.update(this.state)}
                >保存</Button>
            </div>
        )
    }
}

export default BossInfo