<template>
    <div class="tabControl">
        <div class="tabControl-item" v-for="(item,i) in titles" :key="i" :class="{active: i===currentIndex}" @click="changeTab(i)">
            <span v-text="item"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabControl',
    props: ['titles'],
    data() {
        return {
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
            this.$emit('tabClick',index)
        }
    },
    components: {

    },
};
</script>

<style>
    .tabControl{
        display: flex;
        width: 100vw;
        background-color: #fff;
    }
    .tabControl-item{
        flex: 1;
        text-align: center;
        font-size: 16px;
        padding: 5px;
    }
    .active{
        color:  var(--color-high-text);
    }
    .active>span{
        border-bottom: 2px solid;
        
    }
</style>
