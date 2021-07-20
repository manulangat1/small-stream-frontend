import React from 'react'
import { NavLink } from 'react-router-dom';
import RoutesLinks from '../../utils/Routes';
import './Header.scss'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import Icons from '../Reusable/Icons/Icons';
const headerEl = [
    {
        id:1,
        type:'HOME',
        icon:HomeIcon
    },
    {
        id:2,
        type:'TRENDING',
        icon:LightningBoltIcon
    },
    {
        id:3,
        type:'FAV',
        icon:BadgeCheckIcon
    },
    {
        id:4,
        type:'COLLECTION',
        icon:CollectionIcon
    },
    {
        id:2,
        type:'Search',
        icon:SearchIcon
    },
]

const Header = () =>{
    
    return (
        <div>
            <header>
                <div className='container'> 
                    <h1>SMALL STREAM</h1>
                    
                    <ul className="flex flex-grow justify-evenly max-w-2xl">
                        {
                            headerEl.map((el:any) => (
                                <li key={el.id} >
                                    <Icons t={el.type} Icon={el.icon}  />
                                </li>
                                
                            ))
                        }
                        {/* <li> <NavLink to={RoutesLinks.Home}> Home </NavLink>  </li>
                        <li> <NavLink to={RoutesLinks.Videos}> Stream </NavLink>  </li> */}
                    </ul>
                
                    
                </div>
            </header>
            
        </div>
    )
}
export default  Header;
