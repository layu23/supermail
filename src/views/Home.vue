<template>
    <div id="home">
      <navbar class="home_navbar"><div slot="center">虞帆喜帖街</div></navbar>
      <tabControl  class="tab-control fiexd" :titles="['热映','经典','推荐']" @tabClick="tabClick"  ref="tabControl1" v-show="isFixed" />
      <scroll ref="scroll" @tabFixed = 'getSon' @pullUpLoad = "loadMore">
        <swiper :banerList="banners" @swiperLoad="swiperLoad" />
        <recommendView :recommends="recommends" />
        <feature/>
        <tabControl  class="tab-control" :titles="['热映','经典','推荐']" @tabClick="tabClick"  ref="tabControl2"/>
        <movies :now="showMovies" />
        <div :style="{backgroundImg:'url('+asd+')'}"></div>
      </scroll>
      <backTop @click.native="goTop" v-show="flag" />

        
    </div>
</template>

<script>
import navbar from '../components/common/navbar/navBar'
import swiper from './homeChildComps/swiper'
import recommendView from './homeChildComps/recommend'
import feature from './homeChildComps/feature'
import tabControl from '../components/content/TabControl'
import movies from '../components/content/movies'
import scroll from '../components/common/scroll/scroll'
import backTop from '../components/common/backTop/backTop'
import {getHomeMultidata,getMovies,getBackImg} from '../network/home'

export default {
    name: '',
    props: {

    },
    data() {
        return {
            banners:null,
            recommends:null,
            movices:null,
            movieList:{
                'top250':{count:0,start:0,list:[]},
                'in_theaters':{count:0,start:0,list:[]},
                'coming_soon':{count:0,start:0,list:[]},
            },
            currentTab:'in_theaters',
            flag:false,
            tabOffsetTop:0,
            isFixed:false,
            saveY:null,
            asd:'http://pic.yupoo.com/fanyu24/8b21def6/a3c8916e.jpg'
        };
    },
    computed: {
        showMovies(){
            return this.movieList[this.currentTab].list
        }
    },
    created() {
        // 请求多个数据
        this.getHomeMultidatas()
        // 请求电影数据
        this.getMovies('top250')
        this.getMovies('in_theaters')
        this.getMovies('coming_soon')   
    },
    mounted() {
        // 763
        // 防抖函数
        this.swiperLoad()
        this.$nextTick(function(){
            const refresh = this.debounce(this.$refs.scroll.scroll.refresh,200)
            this.$bus.$on('itemImgLoad',()=>{
                refresh()
            })
        })    
    },
    beforeDestroy() {
        console.log('bef')
    },
    activated() {
        if(this.$refs.scroll.scroll){
            this.$refs.scroll.scroll.scrollTo(0,this.saveY,500)
            this.$refs.scroll.scroll.refresh()
        }
    },
    deactivated() {
        if(this.$refs.scroll.scroll){
            this.saveY = this.$refs.scroll.scroll.y
        }
    },
    watch: {

    },
    methods: {
        // 事件监听相关
        // 1.监听tabControl点击
        tabClick(index){
            if(index == 0){
                this.currentTab = 'in_theaters'
            }else if(index ==1 ){
                this.currentTab = 'top250'
            }else{
                this.currentTab = 'coming_soon'
            }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
        },
        //2.返回顶部
        goTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        getSon(data){
            this.flag = (data.y) < -763
            this.isFixed = (data.y) < -this.tabOffsetTop
        },
        //上拉加载更多
        loadMore(){
            if(this.currentTab == 'top250'){
                console.log('加载更多')
                this.getMovies(this.currentTab) 
            }
        },
        //防抖函数
        debounce(fun,delay){
            let timer
            let _this = this
            return function(...args){
                if(timer)clearTimeout(timer)
                timer = setTimeout(()=>{
                     _this.$refs.scroll.scroll.refresh()
                },delay)
            }
        },
        // 获取tabControl offsetTop
        swiperLoad(){
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },

        // 网络请求相关
        // 1.获得所有数据
        getHomeMultidatas(){
            getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
        },
        //2.获得电影数据
        getMovies(type){
            const count = 20
            const start = this.movieList[type].start
            getMovies(type,count,start).then(res => {
            this.movieList[type].list.push(...res.data.subjects)
            this.movieList[type].start = start + 20
            this.movieList[type].count = start + 20
            
        })
        }


        
    },
    components: {
        navbar,
        swiper,
        recommendView,
        feature,
        tabControl,
        movies,
        scroll,
        backTop
    },
};
</script>

<style scoped>

    #home{
        margin-top: 44px;
        margin-bottom: 49px;
    }
    .home_navbar{
        background-color: #f1939c;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
    }
    .tab-control{
        z-index: 9;        
    }
    .wrapper{
        height: calc(100vh - 93px);
        overflow: hidden;
        margin-top: 30px;
    }
    .fiexd{
        position: fixed;
        top: 44px;
    }

    
    
</style>

