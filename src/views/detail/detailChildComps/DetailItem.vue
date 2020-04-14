<template>
    <div class="DetailItem">
        <navBar class="detail_navbar">
            <div slot="left" class="glyphicon glyphicon-chevron-left backHome" @click="backHome"></div>
            <div slot="center" class="detailTab">
                <div v-for="(item,i) in detailTab" 
                :key="i" class="detailTabItem" 
                :class="{activeTab:currentIndex == i}"
                @click="changeTab(i)"
                >{{item}}
                </div>
            </div>
        </navBar>
    </div>
</template>

<script>
import navBar from '../../../components/common/navbar/navBar'
export default {
    name: '',
    props: {

    },
    data() {
        return {
            detailTab:[
                '详情',
                '参数',
                '评价',
                '推荐',
            ],
            currentIndex:0
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
        changeTab(index){
            this.currentIndex = index
        },
        backHome(){
            this.$router.back()
        }
    },
    components: {
        navBar
    },
};
</script>

<style scoped >
    .DetailItem{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }
    .detail_navbar{
        background-color: #fff;
    }
    .detailTab{
        display: flex;
    }
    .detailTabItem{
        flex: 1;
        font-size: 14px;
    }
    .activeTab{
        color: var(--color-high-text);
    }
    .backHome{
        
        top: 2px;
    }
</style>
