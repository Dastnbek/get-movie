<template>
    <b-container >
        <div :class="[movieTypeCon]" > 
          <span :class="[movieType]">New</span>     
        </div>
        <b-row id="myRow" >
            <b-col cols="3" v-for="(movie, index) in upComing" :key="`movie+ ${index}`" >
                <router-link :class="[routerLink]" :to="`/movie/new/${index}`" >
                    <MovieCard :movie='movie' />
                </router-link>
            </b-col>
        </b-row>
        <div :class="[movieTypeCon]" > 
          <span :class="[movieType]">Popular</span>     
        </div>
        <b-row id="myRow" >
            <b-col cols="3" v-for="(movie, index) in popular" :key="`popular+${index}`">
                <router-link :class="[routerLink]" :to="`/movie/popular/${index}`" >
                    <MovieCard :movie='movie' />
                </router-link>
            </b-col>
        </b-row>
        <div :class="[movieTypeCon]" > 
          <span :class="[movieType]">Top Rated</span>     
        </div>
        <b-row id="myRow" >
            <b-col cols="3" v-for="(movie, index) in topRated" :key="`top+${index}`" >
                <router-link :class="[routerLink]" :to="`/movie/top/${index}`" >
                    <MovieCard :movie='movie' />
                </router-link>
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
            upComing : [],
            popular : [],
            topRated : [],
            movieType : "movieType",
            movieTypeCon : "movieTypeCon",
            routerLink : "routerLink"
        }
    },
    components : {
        MovieCard
    },
    mounted() {
        //up coming
        axios
        .get("https://api.themoviedb.org/3/movie/upcoming?api_key=06aa50e38281dd9b38543df33f8bab2c&language=en-US&page=1")
        .then(response => {
            this.upComing = response.data.results
            this.$store.dispatch('addNewMovies', response.data.results); 
        })
        //popular
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=06aa50e38281dd9b38543df33f8bab2c&language=en-US&page=1")
        .then(response => {
            this.popular = response.data.results;
            this.$store.dispatch('addPopularMovies', response.data.results)
        })
        //top rated
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=06aa50e38281dd9b38543df33f8bab2c&language=en-US&page=1')
        .then(respons => {
            this.topRated = respons.data.results;
            this.$store.dispatch('addTopMovies', respons.data.results);
        })
    }
}
</script>

<style scoped>
#myRow{
    width:100% ;
    overflow-x: scroll ;
    margin-bottom: 25px;
}
.movieTypeCon{
    margin : 10px 0;
}
.movieType{
    font-size: 25px;
    border: 1px solid;
    border-radius: 2px;
    box-shadow: 5px 5px lightblue;
    cursor: pointer;
    padding: 5px;
}
.row{
    flex-wrap: nowrap;
}
.card{
    box-shadow: 0px 5px 2px 2px;
    transition: box-shadow 0.5s;
    cursor: pointer;
}

.card:hover{
    box-shadow: 0px 5px 2px 2px burlywood;
}

.routerLink{
    color: black;
}

.routerLink:hover{
    text-decoration: none;
}

</style>