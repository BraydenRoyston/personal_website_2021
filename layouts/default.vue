<template>
  <div :class="mode">
    <NavBar :top="atTop"/>
    <Nuxt/>
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
      atTop: true,
    }
  },
  methods: {
    transitionNav(pageState) {
      if (pageState == "up") {
        this.atTop = true;
      } else {
        this.atTop = false;
      }
    }
  },
  computed: {
    dark() {
      return this.$store.state.dark;
    },
    mode() {
      if (!this.dark) {
        return "";
      } else {
        return "darkMode";
      }
    },
    loaded() {
      return this.$store.state.loaded;
    }
  },
  created() {
    this.$nuxt.$on('scrollStateChange', (direction) => {
      this.transitionNav(direction);
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('scrollStateChange');
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');


:root {
  overflow-y: hidden;
  /* typography */
  font-family: Noto Sans KR;
  font-size: 8px;
  --fs-large: clamp(1.5rem, calc(3vw + 1rem), 5rem);
  --fs-medium: clamp(1.1rem, calc(2vw + 0.75rem), 3.5rem);
  --fs-small: clamp(1.5rem, calc(1.5vw + 0.5rem), 2.2rem);
  --fs-extra-small: clamp(0.75rem, calc(1vw + 0.5rem), 1.9rem);
  

  /* colour palette */
  --blue-sapphire: #05668D;
  --platinum: #e5e5e5;
  --white: #ffffff;
  --mountain-meadow: #02c39a;
  --xiketic: #03071e;
  --light-nav-spacer: #54D7B6;
  --dark-nav-spacer: #378AAF;

  --primary: var(--mountain-meadow);
  --background: var(--white);
  --highlight: var(--blue-sapphire);
  --text: var(--xiketic);
  --nav: var(--light-nav-spacer);
  --navSpacer: var(--light-nav-spacer);

  /* formatting */
  --non-mobile: row;
  --mobile: column;
  --dynamic-justify: space-around;
  --dynamic-flex: var(--non-mobile);
  --dynamic-flex-alternate: var(--mobile);

  /* other assets */
  --highlight-logo: url('../assets/logo/blue_clean.png');
}

@media screen and (max-width: 725px) {
  :root {
    --dynamic-flex: var(--mobile);
    --dynamic-flex-alternate: var(--non-mobile);
    --dynamic-justify: center;
  }
}

.darkMode {
  --primary: var(--blue-sapphire);
  --background: var(--xiketic);
  --highlight: var(--mountain-meadow);
  --text: var(--platinum);
  --nav: var(--dark-nav-spacer);
  --navSpacer: var(--dark-nav-spacer);
  --highlight-logo: url('../assets/logo/mint_clean.png');

  position: absolute;
}

body {
  margin: 0;
  padding: 0;
}

.loader-enter-active, .loader-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.loader-enter, .loader-leave-to {
  opacity: 0;
  position: absolute;
}
</style>
