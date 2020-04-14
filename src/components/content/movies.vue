<template>
    <div class="movies">
        <movieItem v-for="(item,i) in now" :key="i" :movie-item="item" />
    </div>  
</template>

<script>
import movieItem from './movieItem'
export default {
    name: '',
    props: ['now'],
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
        movieItem,
    },
};
</script>

<style>
    .movies{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>
