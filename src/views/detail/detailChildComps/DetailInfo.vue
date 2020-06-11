<template>
    <div id="detail_info">
        <h3 class="text_padding"><span class="title">{{movies.title}}</span><span class="year">({{movies.year}})</span></h3>
        <div class="basic_info text_padding">
            <div class="info">
                <div >
                导演:
                    <a :href="item.alt" v-for="(item,i) in movies.directors" :key="i">
                        {{item.name}}
                    </a>
                </div>
                <div>
                主演:
                    <a href="" v-for="(item,i) in casts" :key="i" v-show="i<2">
                        <span v-show="i>0">/</span>{{item.name}}
                    </a>
                    ...
                </div>
                <div>
                类型:
                    <span  class="infoText" v-for="(item,i) in movies.genres" :key="i">
                        <span v-show="i>0">/</span>{{item}}
                    </span>
                </div>
                <div>
                制片国家/地区:
                    <span  class="infoText" v-for="(item,i) in movies.countries" :key="i"><span v-show="i>0">/</span>{{item}}</span>
                </div>
                <div>
                语言:
                    <span class="infoText" v-for="(item,i) in movies.languages" :key="i" ><span v-show="i>0">/</span>{{item}}</span>
                </div>
                <div>
                上映日期:
                    <span class="infoText" v-for="(item,i) in movies.pubdates" :key="i" ><span v-show="i>0">/</span>{{item}}</span>
                </div>
                <div>
                片长:
                    <span class="infoText" v-for="(item,i) in movies.durations" :key="i" ><span v-show="i>0">/</span>{{item}}</span>
                </div>
                <div>
                又名:
                    <span class="infoText" v-for="(item,i) in movies.aka" :key="i" ><span v-show="i>0">/</span>{{item}}</span>
                </div>
            </div>
            <div class="graded">
                豆瓣评分
                <div v-for="(item,key,i) in movies.rating" :key="i">
                    <span v-show="key=='average'" class="star">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="summary text_padding">
            <h2 class="info_title ">剧情简介:</h2>
            <p v-text="movies.summary" class="infoText introduce"></p>
        </div>
        <div class="summary text_padding">
            <h2 class="info_title ">主要演职员:</h2>    
        </div>
        <ul class="movie_celebrities">
            <li v-for="(item,i) in casts" :key="i" class="item_celebrity">
                <a :href="item.alt">
                    <img :src="item.avatars.small" alt="" class="img-rounded">
                </a>
                <div>{{item.name}}</div>
            </li>
        </ul>
        <hr>
        <div class="comments text_padding">
            <h2 class="info_title ">短评:</h2>
            <div v-for="(item,i) in movies.popular_comments" :key="i" class="comments_item">
                <div class="author">
                    <a :href="item.author.alt">
                        <img :src="item.author.avatar" alt="" class="img-circle">
                    </a>
                    <div>{{item.author.name}}</div>
                    <div class="author_star"><span class=" glyphicon glyphicon-star" v-for="(count,i) in item.rating.value" :key="i"></span></div>
                </div>
                <div class="comments_item_info">
                    <div>{{item.content}}</div>
                    <div><span class="glyphicon glyphicon-thumbs-up zan"></span>&nbsp;{{item.useful_count}}</div>
                </div>
                <hr>
            </div>
        </div>
        <h2>推荐</h2>
        <div class="comments text_padding">
            <h2 class="info_title ">影评:</h2>
            <div v-for="(item,i) in movies.popular_reviews" :key="i" class="comments_item">
                <div class="author">
                    <a :href="item.author.alt">
                        <img :src="item.author.avatar" alt="" class="img-circle">
                    </a>
                    <div>{{item.author.name}}</div>
                    <div class="author_star"><span class=" glyphicon glyphicon-star" v-for="(count,i) in item.rating.value" :key="i"></span></div>
                </div>
                <div class="">
                    <b style="font-size:16px">{{item.title}}</b>
                    <div>{{item.summary}}</div>
                    <div></div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailInfo',
    props: [
        'movies',
        'casts'
    ],
    data() {
        return {
            
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped>
    
    .text_padding{
        padding: 5px;
        
    }
    .basic_info{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        
    }
    .title{
        color: #000;
    }
    .year{
        color: #61649f;
    }
    a{
        color: blueviolet;
    }
    .infoText{
        color: #000;
        
    }
    .star{
        color: red;
        font-size: 2rem;
    }
    .info{
        flex: 1;
    }
    .introduce{
        text-indent: 3rem;
        line-height: 20px;
    }
    .info_title{
        font-size: 1.5rem;
    }
    .movie_celebrities{
        width: 100vw;
        display: flex;
        list-style: none;
        height: 150px;
        
    }
    .item_celebrity{
        flex: 1;
        overflow: hidden;
        
    }
    .item_celebrity>a>img{
        width: 100%;
    }
    .item_celebrity>div{
        text-align: center;
    }
    .comments_item{
        
        width: 100vw;
    }
    .author{
        display: flex;
        
    }
    .author>div{
        line-height: 50px;
        margin-left: 10px;
    }
    .author_star>span{
        top: 2px;
        color: #f9bd10;
    }
    .comments_item_info{
        margin-left: 40px;
    }
    .zan{
        top: 2px;
    }
    
</style>
