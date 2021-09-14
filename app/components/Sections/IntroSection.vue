<template>
    <div class="intro" :class="waveType">
        <img class="logo" src="../../assets/logo/gradient_clean.png" alt="">
        <div class="introductionText">
            <PrimaryHeading 
                :text="greeting"
            />
            <SecondaryHeading 
                :text="intro"
            />
            <DynamicHeading
                :text="dynamic"
            />
            <SecondaryHeading 
                :text="invitation"
            />
            <ScrollButton />
        </div>
    </div>
</template>

<script>
import PrimaryHeading from '../Typography/PrimaryHeading.vue';
import SecondaryHeading from '../Typography/SecondaryHeading.vue';
import DynamicHeading from '../Typography/DynamicHeading.vue';
import ScrollButton from '../UserInterface/ScrollButton.vue';

export default {
  components: {
    PrimaryHeading,
    SecondaryHeading,
    DynamicHeading,
    ScrollButton,
  },
  data() {
    return {
      greeting: "Hey there!",
      intro: "My name is Brayden Royston, and I",
      invitation: "Scroll down to learn more about me!",
    }
  },
  computed: {
      dark() {
          return this.$store.state.dark;
      },
      dynamic() {
          return "love developing cool stuff.";
      },
      waveType() {
          if (!this.dark) {
              return "waveDivider";
          }
          return "waveDividerDark";
      },
  },
}
</script>

<style scoped>
.intro {
  height: 90vh;
  transition: background-color 1s ease, color 1s ease, background-image 1s ease;
  background: var(--background);
  background-size: cover;
  /* color: var(--text); */
  text-align: center;

  display: flex;
  flex-direction: var(--dynamic-flex);
  align-items: center;
  justify-content: center;
}

.intro * {
    margin-top: 5px;
    margin-bottom: 5px;
}

.logo {
    height: 60vh;
    width: auto;
    margin-bottom: 10vh;
}

.introductionText {
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 725px) {
  .logo {
      margin-bottom: 0;
      height: 40vh;
      width: auto;
  }
}

.waveDivider {
    /* aspect-ratio: 500/300; */
    width: 100%;
    
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/wave1_light.svg');
}

.waveDividerDark {
    background-image: url('../../assets/wave1_dark.svg');
}
</style>