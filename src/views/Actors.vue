<template>
    <b-row>
        <b-col cols="2" v-for="(actor, index) in actors" :key="`actor+${index}`" >
            <ActorsCard :name="actor.name" :imageUrl="actor.profile_path" />
        </b-col>
    </b-row>
</template>

<script>
import axios from 'axios'
import ActorsCard from '../components/ActorsCard'

export default {
    data(){
        return {
            actors : []
        }
    },
    components: {
        ActorsCard
    },
    mounted(){
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=06aa50e38281dd9b38543df33f8bab2c&language=en-US&page=1')
        .then( response => this.actors = response.data.results)
    }    
}
</script>

<style scoped>
    .row{
        margin-right: 0;
        margin-left: 0;
    }
</style>