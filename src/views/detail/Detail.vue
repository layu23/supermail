<template>
    <div class="detail">
        <detailItem/>
            <swiper :detailBaner = "photos" @swiperLoad = "swiperLoad" />
            <detailInfo 
            :movies = "movies"
            :casts = "casts"
            />
    </div>
</template>

<script>
import detailItem from './detailChildComps/DetailItem'
import deatilScroll from './detailChildComps/DetailScroll'
import swiper from './detailChildComps/swiper'
import detailInfo from './detailChildComps/DetailInfo'
import {movieSubject,movies} from '../../network/detail'
export default {
    name: 'detail',
    props: {

    },
    data() {
        return {
            id:null,
            subjects:null,
            photos:null,
            isLoad:false,
            movies:{},
            casts:[]
        };
    },
    computed: {

    },
    created() {
        
        
    },
    mounted() {
        
    },
    activated() {
        this.id = this.$route.params.id
        movieSubject(this.id).then(res => {
            this.subjects = res.data
            this.photos = res.data.photos
            this.movies = new movies(res.data)
            this.casts = res.data.casts
        })

    },
    deactivated() {
        this.isLoad = false
        this.movies = {}
        this.casts = {}
    },
    watch: {

    },
    methods: {
        swiperLoad(load){
            this.isLoad = load
        }
    },
    components: {
        detailItem,
        swiper,
        detailInfo,
        deatilScroll
    },
};
</script>

<style scoped>
    .detail{
        z-index: 20;
        position: relative;
        background-color: #fff;
    }
</style>
