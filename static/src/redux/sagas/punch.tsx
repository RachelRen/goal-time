import { call, fork,  takeEvery, put, take} from 'redux-saga/effects';
import 'whatwg-fetch';

import {fetchRequest} from "../../util/ajax";

import * as actions from '../actions';




function postPunch(params:any){
    const goal = fetchRequest({
        url: "/api/punch/add",
        data: params
    }).then((json:any) => {
        return json
    })
    return goal;
}

export function* addWatchPunch(){
    while (true) {
      const {payload} = yield take("ADD_PUNCH")
      const punch = yield call(postPunch, payload);
      yield put(actions.addPunchGoal(punch));
    }
}

