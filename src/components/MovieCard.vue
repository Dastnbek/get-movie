<template>
    <b-card :img-src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
            {{ movie.original_title }}
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    props : ['movie']
}
</script>

<style scoped>
.card-img-left{
    height: 150px;
}
</style>