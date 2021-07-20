import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitles } from '../../helpers';
import Thumbnail from '../Thumbnail/Thumbnail';


interface ParamsI{
    genre:string;
}
const  Results = ()  => {
    const [movies,setMovies] = useState<any>([])
    const params = useParams<ParamsI>();
    console.log(params.genre)
    const link:any = getTitles.find( ({title}) => title === `${params.genre}`);
    console.log("here",link?.url)
    useEffect(() => {
        setMovies([])
        console.log(movies)
        async function  callT(){
            try {
                const result = await  axios.get(`https://api.themoviedb.org/3${link.url}` )
                console.log(result)
                setMovies(result.data.results)
                console.log(movies)
            } catch (error){
                console.log(error)
                setMovies([])
            }
            
        }
        callT()
    }, [params.genre])
    return (
        <main>
            <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4">
                {
                    movies.map((movie:any) => (
                        <div key={movie.id}>
                            <Thumbnail result={movie} />
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Results
