import {getMovie} from '../network/request'

export function movieSubject(id){
    return getMovie({
        url:'subject/'+id
    })
}

export class movies{
    constructor(itemInfo){
        // 标题
        this.title = itemInfo.title
        //类型
        this.genres = itemInfo.genres
        // 热评
        this.popular_comments = itemInfo.popular_comments
        // 影评
        this.popular_reviews = itemInfo.popular_reviews
        // 评分
        this.rating = itemInfo.rating
        // 导演
        this.directors = itemInfo.directors
        // 主演
        this.casts - itemInfo.casts
        // 制片国家/地区 
        this.countries = itemInfo.countries
        // 语言
        this.languages = itemInfo.languages
        // 片长
        this.durations = itemInfo.durations
        //年份
        this.year = itemInfo.year
        // 上映时间
        this.pubdates = itemInfo.pubdates
        // 又名
        this.aka = itemInfo.aka
        // 剧情简介
        this.summary = itemInfo.summary
        
    }
}