import React from 'react'

interface IconProps {
    t:any;
    Icon:any
}

const  Icons = ({t,Icon}:IconProps) => {
    
    return (
        <section>
            <div className="flex flex-col items-center cursor-pointer  w-12 group sm:w-20 hover:text-white ">
            { Icon && <Icon  className="h-8 mb-1 group-hover:animate-bounce"  />}
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{ t && t}</p>
            </div>
            
        </section>
    )
}

export default Icons
