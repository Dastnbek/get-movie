<template>
    <b-container >
        <h2> Top Rated </h2>
        <b-row id="myRow" >
            <b-col cols="3" v-for="movie in topRated">
                <MovieCard :movie='movie' />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import MovieCard from '../components/MovieCard'

export default {
    data(){
        return { 
            topRated : []
        }
    },
    components : {
        MovieCard
    },
    mounted() {
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=06aa50e38281dd9b38543df33f8bab2c&language=en-US&page=1')
        .then(respons => this.topRated = respons.data.results)
    }
}
</script>

<style scoped>
#myRow{
    width:100% ;
    overflow-x: scroll ;
}

.row{
    flex-wrap: nowrap;
}
</style>