<template>
    <div class="bio" :class="waveType">
        <div class="parentSpacer"></div>
        <div class="contactInformation">
            <div class="picture"></div>
            <SocialRow />
        </div>
        
        <div class="bioInformation">
            <DynamicHeading
                :text="title"
            />
            <p class="introduction">
                I'm a double degree student currently studying at the <span>University of Waterloo</span> 
                and <span>Wilfrid Laurier University</span>
                completing a <span>Bachelor of Computer Science</span> and <span>Bachelor of Business Administration</span> respectively. Great to meet you!
                <br />
                <br />
                I just finished a co-op team as a <span>Fullstack Mobile Developer at TD Lab</span>, gaining valuable experience with
                Flutter, Firebase, and VueJS. I'm currently on the hunt for an awesome job for the <span>Winter 2022 season!</span>
                <br />
                <br />
                <span>Scroll below to learn more about some of my projects and experiences :D</span>
            </p>
        </div>
        <div class="parentSpacer"></div>
    </div>
</template>

<script>
import PrimaryHeading from '../Typography/PrimaryHeading.vue';
import DynamicHeading from '../Typography/DynamicHeading.vue';
import SocialRow from '../Layout/SocialRow.vue';

export default {
    components: {
        PrimaryHeading,
        DynamicHeading,
        SocialRow,
    },
    data() {
        return {
            title: "Who am I?",
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
        }
    }
}
</script>

<style scoped>
.bio {
    scroll-behavior: smooth;
    height: 90vh;
    width: 100vw;
    transition: background-color 1s ease, color 1s ease, background-image 1s ease;
    background: var(--background);
    background-size: cover;
    color: var(--text);
    text-align: center;

    display: flex;
    flex-direction: var(--dynamic-flex);
    align-items: center;
    justify-content: center;
}

.picture {
    height: 50vh;
    width: 50vh;

    border: 3px solid var(--text);
    border-radius: 50%;

    background-image: url('../../assets/pictures/river.JPG');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: border 1s ease;
}

.contactInformation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.parentSpacer {
    height: 100%;
    width: 20vw;
}

.bioInformation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.introduction {
    width: 75%;
    font-size: var(--fs-small);
}

span {
    color: var(--highlight);
    transition: color 1s ease;
    font-weight: 700;
}

.waveDivider {
    /* aspect-ratio: 950/300; */
    width: 100%;
    
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/waveGroup_light.svg');
}

.waveDividerDark {
    background-image: url('../../assets/waveGroup_dark.svg');
}

@media screen and (max-width: 725px) {
  .picture {
    height: 30vh;
    width: 30vh;
  }
  .introduction {
      width: 100%;
      margin-bottom: 30px;
  }
  .parentSpacer {
    height: 100%;
    width: 0;
    }
}
</style>