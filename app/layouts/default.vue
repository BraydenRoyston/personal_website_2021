<template>
  <div :class="mode">
    <NavBar @modeChange="modeChange"/>
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '../components/Layout/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      dark: false,
    }
  },
  methods: {
    modeChange() {
      this.dark = !this.dark;
    }
  },
  computed: {
    mode() {
      if (!this.dark) {
        return "";
      } else {
        return "darkMode";
      }
    }
  }
}
</script>

<style>
:root {
    font-family: Courier;
    --mint: #02C39A;
    --darkBlue: #05668D;
    --offBlack: #03071e;
    --paleSpring: #F0F3BD;
    --midBlue: #028090;
    --textGray: #e5e5e5;

    --primary: var(--mint);
    --background: white;
    --text: black;
}

.darkMode {
  --primary: var(--midBlue);
  --background: var(--darkBlue);
  --text: white;
}

body {
  margin: 0;
  padding: 0;
}
</style>
