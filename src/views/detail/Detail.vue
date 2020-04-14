<template>
    <div class="detail">
        <detailItem/>
        <swiper :detailBaner = "photos" @swiperLoad = "swiperLoad" />
        <detailInfo 
        :movies = "movies"
        :casts = "casts"
        />
        <ul>
            <li>a1</li>
            <li>a2</li>
            <li>a3</li>
            <li>a4</li>
            <li>a5</li>
            <li>a6</li>
            <li>a7</li>
            <li>a8</li>
            <li>a9</li>
            <li>a10</li>
            <li>a11</li>
            <li>a12</li>
            <li>a13</li>
            <li>a14</li>
            <li>a15</li>
            <li>a16</li>
            <li>a17</li>
            <li>a18</li>
            <li>a19</li>
            <li>a20</li>
            <li>a21</li>
            <li>a22</li>
            <li>a23</li>
            <li>a24</li>
            <li>a25</li>
            <li>a26</li>
            <li>a27</li>
            <li>a28</li>
            <li>a29</li>
            <li>a30</li>
            <li>a31</li>
            <li>a32</li>
            <li>a33</li>
            <li>a34</li>
            <li>a35</li>
            <li>a36</li>
            <li>a37</li>
            <li>a38</li>
            <li>a39</li>
            <li>a40</li>
            <li>a41</li>
            <li>a42</li>
            <li>a43</li>
            <li>a44</li>
            <li>a45</li>
            <li>a46</li>
            <li>a47</li>
            <li>a48</li>
            <li>a49</li>
            <li>a50</li>
            <li>a51</li>
            <li>a52</li>
            <li>a53</li>
            <li>a54</li>
            <li>a55</li>
            <li>a56</li>
            <li>a57</li>
            <li>a58</li>
            <li>a59</li>
            <li>a60</li>
            <li>a61</li>
            <li>a62</li>
            <li>a63</li>
            <li>a64</li>
            <li>a65</li>
            <li>a66</li>
            <li>a67</li>
            <li>a68</li>
            <li>a69</li>
            <li>a70</li>
            <li>a71</li>
            <li>a72</li>
            <li>a73</li>
            <li>a74</li>
            <li>a75</li>
            <li>a76</li>
            <li>a77</li>
            <li>a78</li>
            <li>a79</li>
            <li>a80</li>
            <li>a81</li>
            <li>a82</li>
            <li>a83</li>
            <li>a84</li>
            <li>a85</li>
            <li>a86</li>
            <li>a87</li>
            <li>a88</li>
            <li>a89</li>
            <li>a90</li>
            <li>a91</li>
            <li>a92</li>
            <li>a93</li>
            <li>a94</li>
            <li>a95</li>
            <li>a96</li>
            <li>a97</li>
            <li>a98</li>
            <li>a99</li>
            <li>a100</li>
        </ul>
    </div>
</template>

<script>
import detailItem from './detailChildComps/DetailItem'
import swiper from './detailChildComps/swiper'
import detailInfo from './detailChildComps/DetailInfo'
import {movieSubject,movies} from '../../network/detail'
export default {
    name: 'detail',
    props: {

    },
    data() {
        return {
            id:null,
            subjects:null,
            photos:null,
            isLoad:false,
            movies:{},
            casts:[]
        };
    },
    computed: {

    },
    created() {
        
        
    },
    mounted() {
        
    },
    activated() {
        this.id = this.$route.params.id
        movieSubject(this.id).then(res => {
            this.subjects = res.data
            this.photos = res.data.photos
            this.movies = new movies(res.data)
            this.casts = res.data.casts
        })

    },
    deactivated() {
        this.isLoad = false
        this.movies = {}
        this.casts = {}
    },
    watch: {

    },
    methods: {
        swiperLoad(load){
            this.isLoad = load
        }
    },
    components: {
        detailItem,
        swiper,
        detailInfo
    },
};
</script>

<style scoped lang="scss">

</style>
