import { call, fork,  takeEvery, put, take} from 'redux-saga/effects';
import 'whatwg-fetch';

import {fetchRequest} from "../../util/ajax";

import * as actions from '../actions';


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

function fetchGoals(){
    const list = fetchRequest({
        url: "/api/goal/list",
        // data: params
    }).then((json:any) => {
        return json
    })
    return list;
}

export function* receiveGoals(){
    const list = yield call(fetchGoals);
    yield put(actions.receiveGoals(list));
}

export function* takeEveryList(){
    yield takeEvery('FETCH_GOALLIST', receiveGoals)
}

