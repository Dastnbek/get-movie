<template>
  <div id="app">
    <div id="nav">
        <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    components : {
        Navbar
    }
}
</script>