const API_KEY= process.env.REACT_APP_API_KEY;

export const getTitles =  [
    {
        id:1,
        title:'fetchTrending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    {
        id:2,
        title:'fetchTopRated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    {
        id:3,
        title:'fetchActionMovies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    }
]