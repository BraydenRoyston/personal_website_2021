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
                <transition name="dynamicText" mode="out-in" appear>
                    <!-- <DynamicHeading
                        :text="dynamics[dynamicIndex]"
                        :key="dynamicIndex"
                    /> -->
                    <svg width="100%" height="100%" key="dynamicIndex">
                        <text x="50%" y="60%"  text-anchor="middle"  >
                        {{ dynamics[dynamicIndex] }}
                        </text>
                    </svg>
                </transition>
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
      dynamics: [
          "love developing cool stuff.",
          "am a problem solver.",
          "learn quick.",
          "am a fan of public speaking.",
          "read some books.",
      ],
      dynamicIndex: 0,
    }
  },
  created() {
      this.changeDynamicText();
  },
  methods: {
      changeDynamicText() {
          if (this.dynamicIndex == 4) {
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
    width: 40vw;
}

/* .dynamicText-enter-active {
  /* animation: textAnimation 2s; */
/* } */
/* .dynamicText-leave-active { */
  /* animation: textAnimation 2s reverse; */
/* } */

@keyframes textAnimation {
    /* 0% { opacity: 0}
    100% { opacity: 1 } */
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

svg text {
  stroke: var(--primary);
  font-size: var(--fs-large);
  font-weight: 700;
  stroke-width: 1;
 
  animation: textAnimate 4s infinite;
}

@keyframes textAnimate {
    0% {
        opacity: 0;
        stroke-dasharray: 50% 0%;
        fill: var(--highlight);
    }
    50% {
        opacity: 1;
    }

    100% {
        stroke-dasharray: 0% 50%;
        fill: var(--highlight);
        opacity: 0;
    }
}
</style>