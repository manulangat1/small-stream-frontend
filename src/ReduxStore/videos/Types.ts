import { Video } from "./Interface";

export enum VideoTypes {
    LOAD_VIDEOS =  "LOAD_VIDEOS" ,
    LOAD_VIDEO =  "LOAD_VIDEO" ,
    LOAD_VIDEOS_FAIL =  "LOAD_VIDEOS_FAIL" 
}


interface VideosLoaded {
    type: typeof VideoTypes.LOAD_VIDEOS
    payload:{ data: Video[]}
}
interface VideoLoaded {
    type: typeof VideoTypes.LOAD_VIDEO,
    payload: { data: Video}
}
interface loadFail{
    type: typeof VideoTypes.LOAD_VIDEOS_FAIL,
    payload: { error: ''}
}

export type VideoActionType = VideosLoaded | VideoLoaded | loadFail;
