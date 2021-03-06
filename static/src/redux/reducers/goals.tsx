import {FETCH_ICONS} from '../actions/index'

interface StateInit { 
    value?: number,
    list: Array<any>
}

interface InitAction {
    type: string;
    payload?:any
}


export default function goals(state : StateInit = {value: 0, list: []}, action: InitAction) {
    switch (action.type) {
        case 'FETCH_GOALLIST_SUCCESS':
            return Object.assign({}, state, {
                list: action.payload
            });
        case 'ADD_PUNCHGOAL_SUCCESS':
            // const goal = action.payload,
            //     list = [...state.list];

            // const index = list.findIndex(item => {
            //     return item.id == goal.id;
            // })
            // list[index] = goal;
            // debugger;
            return Object.assign({}, state, {
                punchGoal: action.payload
            });

        default:
            return state
    }
}


