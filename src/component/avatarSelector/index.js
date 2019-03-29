import React from 'react'
import {Grid ,List} from 'antd-mobile'



class AvatarSelector extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    handleSelect = (e) => {
        this.setState(e)
    }

    render(){
        const avatarList = ['boy','bull','chick','crab','girl','hedgehog','hippopotamus','koala','lemur',
        'man','pig','tiger','whale','woman','zebra'].map(item =>({
            icon:require(`../img/${item}.png`),
            text:item
        }))
        const grid = this.state.icon ?
            (
                <div>
                    <span>已选择头像</span>
                    <img style={{width:20}} src={this.state.icon} alt=""/>
                </div>
            )
            :
            '请选择头像'
        return (
            <div>
                <List renderHeader={grid}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={e => {
                            this.handleSelect(e)
                            this.props.selectorAvatar(e.text)
                        }}
                    />
                </List>

            </div>
        )
    }
}

export default AvatarSelector