import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'

import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootSaga from '../sagas/index'
import iconfonts from '../reducers/index'
import goals from '../reducers/goals'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(history);
const middleware = [sagaMiddleware, historyMiddleware]

const store = createStore(
  	combineReducers({
		iconfonts: iconfonts,
		goals: goals,
  		router: routerReducer
  	}),
  	(compose(applyMiddleware(...middleware)))
)

sagaMiddleware.run(rootSaga)


export {store, history}

