export const ADD:string = "ADD"
export const REMOVE:string = "REMOVE"
export const FETCH_GOALLIST:string = 'FETCH_GOALLIST'
export const FETCH_GOALLIST_SUCCESS:string = 'FETCH_GOALLIST_SUCCESS'





export function fetchGoalList(list: Array<any>){
	return {
		type: FETCH_GOALLIST_SUCCESS,
		payload: list
	}
}

export * from './goal'

