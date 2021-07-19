import React from 'react'
import { NavLink } from 'react-router-dom';
import RoutesLinks from '../../utils/Routes';
import './Header.scss'
const Header = () =>{
    
    return (
        <div>
            <header>
                <div className='container'> 
                    <h1>SMALL STREAM</h1>
                    
                    <ul>
                        <li> <NavLink to={RoutesLinks.Home}> Home </NavLink>  </li>
                   
                        <li> <NavLink to={RoutesLinks.Videos}> Stream </NavLink>  </li>
                    </ul>
                
                    
                </div>
            </header>
            
        </div>
    )
}
export default  Header;
