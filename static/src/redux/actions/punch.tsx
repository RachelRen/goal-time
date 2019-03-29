export const ADD_PUNCHGOAL_SUCCESS:string = 'ADD_PUNCHGOAL_SUCCESS'


export function addPunchGoal(goal: any){
	return {
		type: ADD_PUNCHGOAL_SUCCESS,
		payload: goal
	}
}