<template>
    <div class="backTop">
        <div class="glyphicon glyphicon-chevron-up"></div>
    </div>
</template>

<script>
export default {
    name: 'backTop',
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

<style scoped lang="css">
    .backTop{
            width: 40px;
            height: 40px;
            line-height: 35px;
            text-align: center;
            position: fixed;
            right: 10px;
            bottom: 60px;
            color: #f1939c;
            font-size: 20px;
            background: rgba(249, 244, 240, 1);
            border-radius: 50%;
            box-shadow: 0 3px 3px #ccc;
            z-index: 10;
        }
</style>
