<template>
    <header class= "baseClass" :class="navClass">
        <div class="logoWrapper">
            <div :class="logoClass">
            </div>
            <p class="name">Brayden Royston</p>
        </div>
        
        <nav>
            <ul class="nav-items">
                <li><a href="#intro" class="nav-link">Home</a></li>
                <li><a href="#bio" class="nav-link">About</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li class="switch-list-item">
                  <ModeButton/>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import ModeButton from '../UserInterface/ModeButton.vue';

export default {
    components: {
        ModeButton,
    },
    props: {
        top: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        navClass() {
            if (!this.top) {
                return "bodyNav";
            }
            return "";
        },
        dark() {
            return this.$store.state.dark;
        },
        logoClass() {
            if (!this.dark) {
                return "logo";
            }
            return "logoDarkMode";
        }
    },
}
</script>

<style scoped>
.baseClass {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: background-color 1s ease, color 1s ease;
    height: 10vh;
    background: var(--background);
    z-index: 200;
}

.bodyNav {
    background: var(--nav);
}

.logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logoWrapper:hover p {
    color: var(--highlight);
    cursor: default;
}

.logoWrapper:hover div {
    background-image: var(--highlight-logo);
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 10vh;
    width: 10vh;

    background-image: url('../../assets/logo/black_clean.png');
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-image 1s ease;
}

.logoDarkMode {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 10vh;
    width: 10vh;

    background-image: url('../../assets/logo/white_clean.png');
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-image 1s ease;
}

.name {
    color: var(--text);
    --spacing: 1em;
    padding: 0.5em;
    transition: color 1s ease;
    font-size: var(--fs-small);
}

.nav-icon {
    height: 10vh;
    width: auto;
}

.nav-items {
    list-style: none;
    display: flex;
}

.nav-link {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    --spacing: 1em;
    padding: 0.5em;
    position: relative;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    font-size: var(--fs-small);
    color: var(--text);
    transition: color 1s ease;
}

.nav-link:hover {
    color: var(--highlight);
}

.switch-list-item {
    display: flex;
    align-items: center;
}

@media screen and (max-width: 725px) {
  .logo {
      height: 10vw;
      width: 10vw;
  }
  .logoDarkMode {
      height: 10vw;
      width: 10vw;
  }
  .name {
      display: none;
  }
}
</style>