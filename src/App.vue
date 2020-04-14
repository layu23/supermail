<template>
    <div id="app">
    <transition mode="out-in">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>  
    </transition> 
        <mainTabBar  />
    </div>
</template>

<script>
import mainTabBar from '@/components/content/MainTabBar'
export default {
    name: '',
    props: {

    },
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
        mainTabBar
    },
};
</script>

<style>
    @import './assets/bootstrap/css/bootstrap.min.css';
    @import './assets/css/base.css';
    @import './assets/css/swiper.css';

</style>
