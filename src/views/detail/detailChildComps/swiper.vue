<template>
        <div class="swiper-container" v-show="flag">
          <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in detailBaner" :key="i">
                  <a>
                  <img :src="item.image" alt="" @load="swiperLoad" >
                  </a>
                </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
</template>

<script>
import Swiper from 'swiper'
 
export default {
    name: 'detailSwiper',
    props: ['detailBaner'],
    data() {
        return {
          isLoad:0,
          mySwiper:null,
          flag:false,
        };
    },
    computed: {

    },
    created() {
      
    },
    mounted() {
        
    },
    activated() {
        this.mySwiper = new Swiper ('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
        clickable:true
        },
        autoplay: true,//可选选项，自动滑动
        speed:500,
        observer:true,
        }) 
        //鼠标滑过pagination控制swiper切换
        for(var i=0;i<this.mySwiper.pagination.bullets.length;i++){
        this.mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
        }  
    },
    deactivated() {
        this.mySwiper.destroy(true,true)
        this.flag =false
    },
    watch: {

    },
    methods: {
      // 监听图片加载完 再显示 不然用户体验不好
      swiperLoad(){
        this.isLoad++
          this.$emit('swiperLoad',true)
          if(this.isLoad==this.detailBaner.length){
            this.flag = true
            this.isLoad = 0
          }
      }
    },
    components: {

    },
};
</script>

<style scoped>
  .swiper-container{
    margin-top: 44px;
  }
  .wait{
    position: fixed;
    top: 20px;
    width: 100vw;
    height: 40px;
    text-align: center;
  }
  img{
    width: 100%;
  }
</style>
