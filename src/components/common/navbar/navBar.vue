<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
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

    },
};
</script>

<style>
    .navbar{
        display: flex;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
        position: relative;
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>
