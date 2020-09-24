<template>
    <h2> {{newMovies[0].id}} </h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed : {
        ...mapState([
          'newMovies',
        ])
    }
}
</script>