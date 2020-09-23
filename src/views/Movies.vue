<template>
    <b-container>

        <b-row id="myRow" >
            <b-col cols="3" v-for="item in topRated" >
                <b-card v-bind:class="[myCardImageClass]" :img-src="'https://image.tmdb.org/t/p/w300/' + item.poster_path" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        {{ item.original_title }}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return { 
            topRated : []
        }
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

.card-img-left{
    height: 150px;
}

.row{
    flex-wrap: nowrap;
}
</style>