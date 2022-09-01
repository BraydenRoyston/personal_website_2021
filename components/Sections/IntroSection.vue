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
            <div class="typeContainer">
                <vue-typer
                    :text='dynamics'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='70'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='blink'
                ></vue-typer>
            </div>
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
import { VueTyper } from 'vue-typer';

export default {
  components: {
    PrimaryHeading,
    SecondaryHeading,
    DynamicHeading,
    ScrollButton,
    'vue-typer': VueTyper
  },
  data() {
    return {
      greeting: "Hey there!",
      intro: "My name is Brayden Royston, and I",
      invitation: "Scroll down to learn more about me!",
      dynamics: [
          "love developing cool stuff.",
          "solve complex problems.",
          "learn quick.",
      ],
      dynamicIndex: -1,
    }
  },
  created() {
      this.changeDynamicText();
  },
  methods: {
      changeDynamicText() {
          if (this.dynamicIndex == 2) {
              this.dynamicIndex = 0;
          } else {
              this.dynamicIndex++;
          }
          setTimeout(this.changeDynamicText, 4000);
      }
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

.typeContainer {
    background: solid;
    height: calc(var(--fs-large) + 5px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 
this class alters the dynamically typed text.
it's needed because default way to change text specified by vue-typer
library doesn't work.
*/
::v-deep .typed {
  color: var(--highlight);
  font-size: var(--fs-large);
  font-weight: 700;
  stroke: var(--primary);
  stroke-width: 1;
}

.intro {
    scroll-behavior: smooth;
    height: 90vh;
    width: 100vw;
    transition: background-color 1s ease, color 1s ease, background-image 1s ease;
    background: var(--background);
    background-size: cover;
    text-align: center;

    display: flex;
    flex-direction: var(--dynamic-flex);
    align-items: center;
    justify-content: center;
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
    width: 40vw;
}

@media screen and (max-width: 725px) {
    .logo {
        margin-bottom: 0;
        height: 40vh;
        width: auto;
    }
    .introductionText {
        width: 80vw;
        height: 40vh;
    }
    svg {
        height: 10vh;
    }
}

.waveDivider {
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