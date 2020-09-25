<template>
    <div>
        <b-container class="bg-dark">
            <b-row>
                <b-col cols="3" >
                    <b-img :src="'https://image.tmdb.org/t/p/w300/'+imageLink" alt="Image 1"></b-img>
                </b-col>
                <b-col cols="9">
                    <div :class="[wrapper]" >
                        <div :class="bigCardTitleContainer" >
                            <span>
                                {{ title }}
                            </span>
                        </div>
                        <div :class="bigCardOverviewContainer" >
                            <span>
                                {{ overview }} 
                            </span>
                        </div>
                    </div>
                    <div :style="{ backgroundImage: 'url('+backImage+')' }" :class="[bigCardContent]" >
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <div :class="actorsTitle">
                <span>
                    Actors
                </span>
            </div>
            <b-row>
                <b-col cols="2" v-for="(actor, index) in movieActors" :key="`actor${index}`" >
                    <MovieActorCard :name="actor.name" :imageUrl="actor.profile_path" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios';
import MovieActorCard from './MovieActorCard'

export default {
    data(){
        return {
            bigCardContent: 'bigCardContent',
            wrapper: 'wrapper',
            bigCardTitleContainer: 'bigCardTitleContainer',
            bigCardOverviewContainer: "bigCardOverviewContainer",
            actorsTitle: 'actorsTitle',
            movieActors: []
        }
    },
    components: {
        MovieActorCard 
    },
    props: ['imageLink', 'title', 'backImage', 'overview', 'id'],
    mounted(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=06aa50e38281dd9b38543df33f8bab2c`)
        .then(response => this.movieActors = response.data.cast)
    }
}
</script>

<style scoped>
    .col-3{
        padding: 0;
    }

    .col-2{
        padding: 5px;
    }

    .col-9{
        padding-right: 0;
    }

    .wrapper{
        position: absolute;
        height: 100%;
        width: 98%;
        background-color: #49313d94;
    }
    .bigCardContent{
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bigCardTitleContainer{
        font-size: 40px;
        margin: 40px 0 0 40px;
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
    .bigCardOverviewContainer{
        margin: 40px;
        color: white;
        font-size: 20px;
    }
    .actorsTitle{
        font-size: 40px;
        font-weight: bold;
        font-family: monospace;
        border-bottom: 1px solid lightblue;
        margin-top: 40px;
    }
</style>