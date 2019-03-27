import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addGUN,removeGUN,setI} from'./index.redux'

@connect(
    state => state.num,
    {addGUN,removeGUN,setI}
)
class App extends Component {

    render() {

        return (
            <div>
                <h2>现在有机枪{this.props.num}吧</h2>
                <button onClick={this.props.addGUN}>加</button>
                <button onClick={this.props.removeGUN}>减</button>
                <button onClick={this.props.setI}>延迟加</button>
            </div>
        );
    }
}

export default App;
