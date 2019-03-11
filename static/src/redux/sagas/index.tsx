import { call, fork,  takeEvery, put, take} from 'redux-saga/effects';
import 'whatwg-fetch';

import {fetchRequest} from "../../util/ajax";

import * as actions from '../actions';

import {takeEveryList} from './list';


export function* helloSaga() {
    console.log('Hello Saga!');
    yield 1
}

function fetchIcons(){
    const list = fetchRequest({
        url: "/api/common/icons"
    }).then((json:any) => {
        return json
    })
    return list;
}

function postGoal(params:any){
    
    const list = fetchRequest({
        url: "/api/goal/add",
        data: params
    }).then((json:any) => {
        return json
    })
    return list;
}

export function* receiveIcons(){
    const list = yield call(fetchIcons);
    yield put(actions.receiveIcons(list));
}


export function* takeEveryGetIcons(){
    yield takeEvery('FETCH_ICONS', receiveIcons)
}


export function* watchAddGoal() {    
    while (true) {
      const {payload} = yield take("ADD_GOAL")
      yield call(postGoal, payload)
    }
}

// export function* watchGoalList(){
    
// }
export default function* rootSaga() {
    yield fork(watchAddGoal)
    yield fork(takeEveryGetIcons);
    yield fork(takeEveryList);
    yield helloSaga();
}
