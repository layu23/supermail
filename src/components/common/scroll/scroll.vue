<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'scroll',
    props: {

    },
    data() {
        return {
            scroll:null,
            flag:false
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$nextTick(function(){
            this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true,
            tab:true,
            probeType:3,
            pullUpLoad:true
            })
            this.scroll.on('scroll',(position) => {
                if(position.y<-763){
                    this.flag = true
                }else{
                    this.flag = false
                }
                this.$emit('tabFixed',position)
            })
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullUpLoad')
                setTimeout(() => {
                    this.scroll.finishPullUp()
                },2000)
            })
        })
           
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped >

</style>
