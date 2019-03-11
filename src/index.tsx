import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import {Route, Router, BrowserRouter, Switch} from 'react-router-dom';

import { store, history } from './redux/store/index';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';

//import routes from "./routers/index"

import './assets/sass/style.scss';
//import 'antd-mobile/dist/antd-mobile.css';
import Home from './page/home/container'
import List from './page/list/container'
import SummaryList from './page/summary/list/container'



import Footer from './page/layout/footer'

import App from './page/test';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="g-app">
                <div className="app-header">header</div>
                <div className="app-content">
                    <Switch>
                        
                        <Route path="/" exact component={List}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/summarylist" exact component={SummaryList}/>
                            
                    </Switch>
                </div>
                <Footer />
                
            </div>
            
        </BrowserRouter>
    </Provider>
    
    ,
    document.getElementById("component")
);