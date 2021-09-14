<template>
  <div class="sections">
    <TopSpacer :observer="topSpacerObserver"/>
    <IntroSection id="intro"/>
    <NavSpacer />
    <BioSection id="bio"/>
    <NavSpacer />
    <PortfolioSection id="portfolio"/>
  </div>
</template>

<script>
import TopSpacer from '../components/Layout/TopSpacer.vue';
import NavSpacer from '../components/Layout/NavSpacer.vue';
import IntroSection from '../components/Sections/IntroSection.vue';
import BioSection from '../components/Sections/BioSection.vue';
import PortfolioSection from '../components/Sections/PortfolioSection.vue';

export default {
  components: {
    TopSpacer,
    NavSpacer,
    IntroSection,
    BioSection,
    PortfolioSection,
  },
  data() {
    return {
      topSpacerObserver: null,
    }
  },
  mounted() {
    this.$store.dispatch('pageIsLoaded');
  },
  methods: {
    onIntersectionChange(entries) {
      entries.forEach(({ target, isIntersecting}) => {
          if (!isIntersecting) {
            this.$nuxt.$emit('scrollStateChange', 'down');
            return;
          }
          this.$nuxt.$emit('scrollStateChange', 'up');
      });
    }
  },
  created() {
    this.topSpacerObserver = new IntersectionObserver(
      this.onIntersectionChange, 
      {
        root: this.$el,
        threshold: 0.01,
      }
    );
  },
  beforeUnmount() {
    this.topSpacerObserver.disconnect();
  }
}
</script>

<style scoped>
.sections::-webkit-scrollbar {
  display: none;
}

.sections {
  scroll-snap-type: y;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  position: fixed;
  top: 0;
}


.about {
  height: 90vh;
  padding: 45vh;
  background: var(--background);
  background-size: cover;
  background-blend-mode: multiple;
  color: var(--text);
  text-align: center;
  /* scroll-snap-align: start; */

}

.stuff {
  height: 90vh;
  padding: 45vh;
  background: var(--background);
  background-size: cover;
  background-blend-mode: multiple;
  color: var(--text);
  text-align: center;
  /* scroll-snap-align: start; */

}

.middleNavSpacer {
  width: 100vw;
    height: 10vh;
    background: cover;
    transition: background-color 1s ease;
    background-color: var(--navSpacer);

    margin-top: -1px;
}
</style>

