<template>
    <div>
        <tab-bar>
            <TabBarItem path='/home' activeColor="#f8df70"> 
                <div class="glyphicon glyphicon-home" slot="item-icon"/>
                <div class="glyphicon glyphicon-home glyphicon-active" slot="item-active-icon"/>
                <div slot="item-text">首页</div>
            </TabBarItem>
            <TabBarItem path='/category' activeColor="#f8df70">
                <div class="glyphicon glyphicon-th-list" slot="item-icon"/>
                <div class="glyphicon glyphicon-th-list glyphicon-active" slot="item-active-icon"/>
                <div slot="item-text">分类</div>
            </TabBarItem>
            <TabBarItem path='/cart' activeColor="#f8df70">
                <div class="glyphicon glyphicon-shopping-cart" slot="item-icon"/>
                <div class="glyphicon glyphicon-shopping-cart glyphicon-active" slot="item-active-icon"/>
                <div slot="item-text">购物车</div>
            </TabBarItem>
            <TabBarItem path='/profile' activeColor="#f8df70">
                <div class="glyphicon glyphicon-user" slot="item-icon"/>
                <div class="glyphicon glyphicon-user glyphicon-active" slot="item-active-icon"/>
                <div slot="item-text">我的</div>
            </TabBarItem>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from '@/components/common/tabbar/TabBar'
    import TabBarItem from '@/components/common/tabbar/TabBarItem'
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
        TabBar,
        TabBarItem
    },
};
</script>

<style scoped lang="scss">

</style>
