import axios from 'axios';

// 女装请求
export function request(config){
    // 1.创建axios的实例
        const instance1 = axios.create({
            baseURL:'http://123.207.32.32:8000/home',
            timeout:3000
        })
        // 请求拦截
        instance1.interceptors.request.use(config=>{  
            return config
        },err=>{     
        })

        //相应拦截 
        instance1.interceptors.response.use(res =>{
            return res.data
        },err =>{
            
        })
        // 2.真正的网络请求
        return instance1(config)
}

// 豆瓣电影请求
export function getMovie(config){
    
    const instance2 = axios.create({
        baseURL:'https://douban.uieee.com/v2/movie/',
        timeout:3000
    })
    return instance2(config)
}


export function webBackImg(config){
    const instance3 = axios.create({
        baseURL:'https://api.66mz8.com/api/bg.img.php',
        timeout:3000
    })

    return instance3(config)
}
