import React from 'react'
import { ThumbUpIcon} from '@heroicons/react/outline'
interface thumbNailI{
    result:any
}
const  Thumbnail = ({result}:thumbNailI)  => {
    console.log(result)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="cursor-pointer p-3 ">
            {
                result && 
                <img src={ 
                    `${BASE_URL}${result.backdrop_path || result.backdrop_path}` || `${BASE_URL}${result.poster_path}`
                } height={1080} width={1920} alt="emh"/>
            }
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white">
                    {
                        result.title || result.original_name
                    }
                </h2>
                <p className="flex items-center">
                    {
            result.release_date || result.first_air_date 
        // 
                    }
                </p>
                <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </div>
        </div>
    )
}

export default Thumbnail
