import React from 'react'
import { Link } from 'react-router-dom'

interface IconProps {
    t:any;
    Icon:any,
    url:any
}

const  Icons = ({t,Icon,url}:IconProps) => {
    
    return (
        <section>
            <div className="flex flex-col items-center cursor-pointer  w-12 group sm:w-20 hover:text-white ">
                <Link to={url}>
                { Icon && <Icon  className="h-8 mb-1 group-hover:animate-bounce"  />}
                </Link>
            
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{ t && t}</p>
            </div>
            
        </section>
    )
}

export default Icons
