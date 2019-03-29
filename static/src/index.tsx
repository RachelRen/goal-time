import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import {Route, Router, BrowserRouter, Switch, Link } from 'react-router-dom';

import { store, history } from './redux/store/index';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

//import routes from "./routers/index"

import './assets/sass/style.scss';
//import 'antd-mobile/dist/antd-mobile.css';
import AddGoal from './page/addgoal/container'
import List from './page/list/container'
import SummaryList from './page/summary/list/container'


import Footer from './page/layout/footer'

import App from './page/test';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="g-app">
                <div className="app-header"></div>
                <div className="app-content">
                    <Switch>
                        <Route path="/" exact component={List}/>
                        <Route path="/add" exact component={AddGoal}/>
                        <Route path="/summarylist" exact component={SummaryList}/>
                            
                    </Switch>
                </div>
                <Footer />
                
            </div>
        </Router>
    </Provider>
    
    ,
    document.getElementById("component")
);