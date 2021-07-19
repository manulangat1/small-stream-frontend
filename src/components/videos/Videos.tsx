import React, { useEffect } from 'react'
import { GetAllVideos } from '../../ReduxStore/videos/Action'
import { useDispatch,useSelector} from 'react-redux'
import { RootState } from '../../ReduxStore/store';
const Videos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        GetAllVideos()(dispatch)
    }, []);
    const videos =  useSelector((state:RootState) => state.videos.videos)

    console.log('videos are',videos)
    return (
        <section>
            <video controls muted autoPlay>
                        <source src={`https://www.youtube.com/watch?v=4RA8U9bReGA`} type="video/mp4"></source>
            </video>
        </section>
    )
}
export default Videos
