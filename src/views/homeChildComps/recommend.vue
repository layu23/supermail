<template>
    <div class="recommend">
        <div v-for="(item,i) in recommends" :key="i">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div v-text="item.title"></div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recommend',
    props: [
        'recommends'
    ],
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

<style scoped lang="scss">

</style>
