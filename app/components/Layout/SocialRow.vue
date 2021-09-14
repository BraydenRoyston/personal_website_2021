<template>
    <div class="socials">
        <SocialButton
            :link="github"
            icon="mdi-linkedin"
        />
        <div class="spacer"></div>
        <SocialButton 
            :link="linkedin"
            icon="mdi-github"
        />
        <div class="spacer"></div>
        <SocialButton 
            :link="email"
            icon="mdi-email"
        />
    </div>
</template>

<script>
import SocialButton from '../UserInterface/SocialButton.vue';

export default {
    components: {
        SocialButton,
    },
    data() {
        return {
            linkedin: "https://linkedin.com/braydenr",
            github: "https://github.com/BraydenRoyston",
            email: "mailto:brayden.royston10@gmail.com",
        }
    }
}
</script>

<style scoped>
.spacer {
    height: 10px;
    width: 10px;
}

.socials {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

</style>