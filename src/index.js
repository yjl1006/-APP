import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducer from './reducer'

import Login from './container/login/index'
import Register from './container/register/index'
import AuthRoute from './component/authRoute/index'
import BossInfo from './container/bossinfo/index'
import './config'
import './index.less'


const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path='/bossinfo' component={BossInfo}></Route>
                        {/*<Route path='/bossinfo' component={BossInfo}></Route>*/}
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                    </Switch>
                </div>
            </BrowserRouter>

        </Provider>
    ),
    document.getElementById('root')
);