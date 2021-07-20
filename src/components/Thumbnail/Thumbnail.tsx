import React, { useEffect, useState } from 'react'
import { ThumbUpIcon} from '@heroicons/react/outline'
import axios from 'axios'
import Youtube from 'react-youtube'
interface thumbNailI{
    result:any
}
const  Thumbnail = ({result}:thumbNailI)  => {
    // console.log(result)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [show,setShow] = useState<boolean>(false)
    const [trailerLink,setTrailerLink] = useState<string>('')
    useEffect(() => {
        async function getTrailer(){
            const resd = await axios.get(`https://api.themoviedb.org/3/movie/${result?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);
            setTrailerLink(resd.data.results[0]?.key)
        }
        getTrailer()
    }, [])
    return (
        <div className="cursor-pointer p-3 " onClick={ () => setShow(!show)}>
            {
                result && 
                <img src={ 
                    `${BASE_URL}${result.backdrop_path || result.backdrop_path}` || `${BASE_URL}${result.poster_path}`
                } height={1080} width={1920} alt="emh"/>
            }
            <div className="p-2">
                <p  className="truncate max-w-md">{result.overview}</p>
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
            {
                show && <Youtube videoId={trailerLink}  />
            }
        </div>
    )
}

export default Thumbnail
