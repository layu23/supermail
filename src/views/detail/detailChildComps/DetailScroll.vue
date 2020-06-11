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
    name: 'scroll2',
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
