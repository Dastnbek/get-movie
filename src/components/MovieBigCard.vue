<template>
    <b-container class="bg-dark">
        <b-row>
            <b-col cols="4" >
                <b-img :src="'https://image.tmdb.org/t/p/w300/'+imageLink" alt="Image 1"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ['imageLink']
}
</script>

<style scoped>
    .col-4{
        padding: 0;
    }
</style>