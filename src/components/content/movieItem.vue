<template>
    <div class="movieItem">
        <a >
            <img :src="movieItem.images.small" alt="" class="img img-rounded" @load="imgOnload" @click="goDatail()">
            <div>
                <p >{{movieItem.title | titleMagage}}</p>
            </div>
        </a> 
    </div>
</template>

<script>

    
export default {
    name: '',
    props: ['movie-item'],
    data() {
        return {
            
        };
    },
    filters:{
        titleMagage(el){
            if(el.length>10){
                return el.substring(0,9)+'...'
            }
            return el
        }
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
        imgOnload(){
            this.$bus.$emit("itemImgLoad");
        },
        goDatail(){
            this.$router.push('/detail/'+this.movieItem.id)
        }
    },
    components: {

    },
};
</script>

<style>
    .movieItem{
        width: 47vw;
        text-align: center;
    }
    .movieItem>a>img{
        width: 100%;
        height: 70vw;
    }
    
</style>
