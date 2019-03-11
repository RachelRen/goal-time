export const ADD:string = "ADD"
export const REMOVE:string = "REMOVE"
export const FETCH_ICONS:string = 'FETCH_ICONS'
export const FETCH_ICONS_SUCCESS:string = 'FETCH_ICONS_SUCCESS'

export const FETCH_GOALLIST:string = 'FETCH_GOALLIST'
export const FETCH_GOALLIST_SUCCESS:string = 'FETCH_GOALLIST_SUCCESS'








export function receiveIcons(list: Array<any>){
	return {
		type: FETCH_ICONS_SUCCESS,
		payload: list
	}
}

export function receiveGoals(list: Array<any>){
	return {
		type: FETCH_GOALLIST_SUCCESS,
		payload: list
	}
}
