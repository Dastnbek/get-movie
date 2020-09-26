<template>
    <b-card :img-src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" img-alt="Card image" img-left class="mb-3">
        <div :class="[titleContainer]" >
            <span :class="[movieTitle]" >
                {{ movie.title }}
            </span>
        </div>
        <div>
            <div :class="infoContainer" >
                <div>
                    Points : {{movie.vote_average}}/10
                </div>
                <div>
                    Release date : {{movie.release_date}}
                </div>
            </div>
        </div>
    </b-card>
</template>

<script>
export default {
    data(){
        return {
            movieTitle : "title",
            titleContainer : "titleContainer",
            infoContainer : 'infoContainer'
        }
    },
    props : ['movie']
}
</script>

<style scoped>
.card-img-left{
    height: 150px;
}

.card-body{
    padding: 5px;
}

.titleContainer{
    height: 60px;
}

.title{
    font-size: 15px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
}
.infoContainer{
    font-size: 11px;
    position: absolute;
    bottom: 0;

}
.card-text {
    font-size: 10px;
}
</style>