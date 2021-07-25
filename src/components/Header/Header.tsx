import React from 'react'
import { Link, NavLink } from 'react-router-dom';
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
        icon:HomeIcon,
        url:RoutesLinks.Login
    },
    {
        id:2,
        type:'TRENDING',
        icon:LightningBoltIcon,
        url:RoutesLinks.Home
    },
    {
        id:3,
        type:'FAV',
        icon:BadgeCheckIcon,
        url:RoutesLinks.Home
    },
    {
        id:4,
        type:'COLLECTION',
        icon:CollectionIcon,
        url:RoutesLinks.Home
    },
    {
        id:2,
        type:'Search',
        icon:SearchIcon,
        url:RoutesLinks.Home
    },
]

const Header = () =>{
    
    return (
        <div>
            <header>
                <div className='container'> 
                {/* <Link to='/'> */}
                    <h1 className="p-2">SMALL STREAM</h1>
                {/* </Link> */}
                    
                    
                    <ul className="flex flex-grow justify-evenly max-w-2xl">
                        {
                            headerEl.map((el:any) => (
                                <li key={el.id} >
                                    <Icons t={el.type} Icon={el.icon} url={el.url} />
                                </li>
                                
                            ))
                        }
                    </ul>
                
                    
                </div>
            </header>
            
        </div>
    )
}
export default  Header;
