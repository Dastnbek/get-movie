<template>
    <div :class="[bigCardContainer]" >
        <MovieBigCard :imageLink="movie().poster_path" :backImage="'https://image.tmdb.org/t/p/w500/'+movie().backdrop_path" :title="movie().title" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieBigCard  from '../components/MovieBigCard'
export default {
    data(){
        return{
            bigCardContainer : "bigCardContainer"
        }
    },
    components: {
        MovieBigCard
    },
    computed: {
        ...mapState([
          'newMovies',
        ])
    },
    methods: {
        movie(){
            return this.newMovies[this.$route.params.id]
        }
    }
}
</script>

<style scoped>
    .bigCardContainer{
        margin-top: 30px;
    }
</style>