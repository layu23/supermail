<template>
        <div class="swiper-container">
          <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in banerList" :key="i">
                  <a :href='item.link'>
                    <img :src="item.image" alt="" @load="swiperLoad">
                  </a>
                </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
</template>

<script>
import Swiper from 'swiper'
 
export default {
    name: '',
    props: ['banerList'],
    data() {
        return {
          isLoad:false
        };
    },
    computed: {

    },
    created() {
      
    },
    mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
        clickable:true
        },
        autoplay: true,//可选选项，自动滑动
        speed:1000,
        observer:true,
        }) 
        //鼠标滑过pagination控制swiper切换
        for(var i=0;i<mySwiper.pagination.bullets.length;i++){
        mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
        }  
    },
    watch: {

    },
    methods: {
      // 监听图片加载完 由于图片未加载 计算tabContour的高度是不对的
      swiperLoad(){
        if(!this.isLoad){
          this.$emit('swiperLoad')
          this.isLoad = true
        }
      }
    },
    components: {

    },
};
</script>

<style >

</style>
