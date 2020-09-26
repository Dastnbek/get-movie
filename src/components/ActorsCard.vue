<template>
    <div>
        <b-card
            :img-src="'https://image.tmdb.org/t/p/w300/'+imageUrl"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 250px;"
            class="mb-2"
        >
            <b-card-text>
                {{ name }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'name']
}
</script>

<style scoped>
    .card-body{
        padding: 5px;
    }
    .card-text{
        font-size: 15px;
    }
</style>