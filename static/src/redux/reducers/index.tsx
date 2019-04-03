import {FETCH_ICONS} from '../actions/index'

interface StateInit { 
    value?: number,
    list: Array<any>
}

interface InitAction {
    type: string;
    payload?:any
}


export default function iconfonts(state : StateInit = {value: 0, list: []}, action: InitAction) {
    switch (action.type) {
        case 'FETCH_ICONS_SUCCESS':
            return Object.assign({}, state, {
                list: action.payload
            });
        case 'ADD_GOAL_SUCCESS':
            debugger;
            return Object.assign({}, state, {
                addedGoal: {
                    status: "success",
                    goal: action.payload
                }
            });

        default:
            return state
    }
}


