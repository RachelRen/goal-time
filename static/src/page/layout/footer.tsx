import * as React from "react";
import {NavLink} from 'react-router-dom';

import './layout.scss';
export default class Footer extends React.Component{

    render(){
        
        return(
            <nav className='app-nav'>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink to="/" activeClassName="nav-list-item-current">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/list" activeClassName="nav-list-item-current">list</NavLink>
                    </li>
                </ul>    
            </nav>
            
        )
    }
}