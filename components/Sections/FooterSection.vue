<template>
    <div class="footer" :class="waveType">
        <div class="exit">
            <h1>Hello again!</h1>
            <h3><br/>Thank you so much for checking out my website. Have a question? Spotted a bug? Want to chat? <br/><br/>Reach out! I'd love to hear from you :D</h3>
            <SocialRow />
        </div>
        <div class="copyright">
            Made from scratch by Brayden Royston. Works cited: Coffee and Persistance. Copyright 2021.
        </div>
    </div>
</template>

<script>
import PrimaryHeading from '../Typography/PrimaryHeading.vue';
import SecondaryHeading from '../Typography/SecondaryHeading.vue';
import DynamicHeading from '../Typography/DynamicHeading.vue';
import ScrollButton from '../UserInterface/ScrollButton.vue';
import SocialRow from '../Layout/SocialRow.vue';

export default {
  components: {
    PrimaryHeading,
    SecondaryHeading,
    DynamicHeading,
    ScrollButton,
    SocialRow,
  },
  computed: {
      dark() {
          return this.$store.state.dark;
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
.footer {
    width: 100vw;
    height: 90vh;
    background: var(--background);
    transition: background-color 1s ease, color 1s ease, background-image 1s ease ;
    background-size: cover;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.exit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;
    margin-top: 10vh;
}

h1 {
    color: var(--highlight);
    font-size: var(--fs-large);
    
    transition: color 1s ease;
}

h3 {
    color: var(--text);
    font-size: var(--fs-medium);

    transition: color 1s ease;
}

.waveDivider {
    width: 100%;
    
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/wave6_light.svg') !important;
}

.waveDividerDark {
    background-image: url('../../assets/wave6_dark.svg') !important;
}

.copyright {
    color: var(--text);
    font-size: var(--fs-extra-small);
    transition: color 1s ease;
    margin-bottom: 1.5vh;
}
</style>