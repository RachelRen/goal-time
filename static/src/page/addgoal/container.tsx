import * as React from "react";
import {connect} from "react-redux";


import AddGoal from './index';

//export interface HomeProps { compiler: string; framework: string; }

const mapStateToProps =(state: any) => {
    
    return {
        list : state.iconfonts.list,
    }
};

function mapDispatchToProps(dispatch: any) {    
    return {
        getList : () => {
            dispatch({type: 'FETCH_ICONS'});
        },
        addGoal: (name:string, id: string) => {
            dispatch({
                type: "ADD_GOAL",
                payload: {
                    name,
                    iconId: id
                }
            })
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(AddGoal)