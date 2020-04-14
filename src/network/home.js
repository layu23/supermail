import {request,getMovie,webBackImg} from './request'
export function getHomeMultidata(){
    return request({
        url:'/multidata',
    })
}

export function getMovies(urls,num,starts){
    return getMovie({
        url:urls,
        params:{
            count:num,
            start :starts
        }
    })
}

export function getBackImg(){
    return webBackImg({
        params:{
            format:"json"
        }
    })
}