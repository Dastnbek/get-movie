<template>
    <div :class="[bigCardContainer]" >
        <MovieBigCard :overview="movie().overview" :imageLink="movie().poster_path" :backImage="'https://image.tmdb.org/t/p/w500/'+movie().backdrop_path" :title="movie().title" />
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
          'popularMovies'
        ])
    },
    methods: {
        movie(){
            if (this.$route.params.type === 'new') {
                return this.newMovies[this.$route.params.id]
            }else if(this.$route.params.type === 'popular'){
                return this.popularMovies[this.$route.params.id]
            }
        }
    }
}
</script>

<style scoped>
    .bigCardContainer{
        margin-top: 30px;
    }
</style>