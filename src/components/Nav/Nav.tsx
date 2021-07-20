import axios from 'axios';
import React, { useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { getTitles } from '../../helpers';
import './Nav.scss';

const Nav = () =>  {
    const history = useHistory();
    const getGenre = (genre:any) => history.push(`/results/${genre}`) 
    
    return (
        <nav>
            <div className="flex flex-row justify-evenly">
                {
                    getTitles.map((title:any) => (
                        <div key={title.id}>
                                <h2  onClick={() => getGenre (title.title)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title.title}</h2>
                        </div>
                    ))
                }
            </div>
        </nav>
    )
}

export default Nav
