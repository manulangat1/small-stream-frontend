export interface Video {
    name: string;
    url:string 
}




export interface VideoInitialState  {
    readonly videos?: Video[]
    isLoading: boolean

}