<template>
    <b-container class="bg-dark">
        <b-row>
            <b-col cols="3" >
                <b-img :src="'https://image.tmdb.org/t/p/w300/'+imageLink" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="9">
                <div :class="[wrapper]" ></div>
                <div :style="{ backgroundImage: 'url('+backImage+')' }" :class="[bigCardContent]" >
                    {{ title }}
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return {
            bigCardContent: 'bigCardContent',
            wrapper: 'wrapper'
        }
    },
    props: ['imageLink', 'title', 'backImage']
}
</script>

<style scoped>
    .col-3{
        padding: 0;
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
</style>