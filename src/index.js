import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducer from './reducer'
import App from './App';
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

// import * as serviceWorker from './serviceWorker';

const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='./login' component={Auth}></Route>
                {/* <Route path='./dashboard' component={Dashboard}></Route> */}
                {/* <Redirect to='./dashboard'></Redirect> */}
            </Switch>
        
        </BrowserRouter>
        <App />
    </Provider>),
    document.getElementById('root')
);