import * as React from "react";
import {connect} from "react-redux";


import Home from './index';

//export interface HomeProps { compiler: string; framework: string; }

const mapStateToProps =(state: any) => {
    return {
        list : state.goals.list,
        punchGoal : state.goals.punchGoal
    }
};

function mapDispatchToProps(dispatch: any) {    
    return {
        getList : () => {
            dispatch({type: 'FETCH_GOALLIST'});
        },
        punchclock: (id: string) => {
            dispatch({
                type: "ADD_PUNCH",
                payload: {
                    id
                }
            })
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)