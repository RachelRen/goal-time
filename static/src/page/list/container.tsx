import * as React from "react";
import {connect} from "react-redux";


import Home from './index';

//export interface HomeProps { compiler: string; framework: string; }

const mapStateToProps =(state: any) => {
    debugger;
    return {
        list : state.goals.list,
    }
};

function mapDispatchToProps(dispatch: any) {    
    return {
        getList : () => {
            dispatch({type: 'FETCH_GOALLIST'});
        },
        addGoal: (name:string, id: string) => {
            debugger;
            dispatch({
                type: "ADD_GOAL",
                payload: {
                    name,
                    id
                }
            })
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)