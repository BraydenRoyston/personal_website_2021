<template>
  <div class="app">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '../components/Layout/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
:root {
    --mint: #02C39A;
    --darkBlue: #05668D;
    --offBlack: #03071e;
    --paleSpring: #F0F3BD;
    --midBlue: #028090;
    --textGray: #e5e5e5;
    font-family: Courier;
}

body {
  margin: 0;
  padding: 0;
}
</style>
