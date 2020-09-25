<template>
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
</template>

<script>
export default {
    data(){
        return {
            bigCardContent: 'bigCardContent',
            wrapper: 'wrapper',
            bigCardTitleContainer: 'bigCardTitleContainer',
            bigCardOverviewContainer: "bigCardOverviewContainer"
        }
    },
    props: ['imageLink', 'title', 'backImage', 'overview']
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
</style>