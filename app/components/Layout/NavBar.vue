<template>
    <header>
        <a href="#"><img src="../../assets/white_clean.png" alt="Logo" class="nav-icon"></a>
        <nav>
            <ul class="nav-items">
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">About</a></li>
                <li><a href="#" class="nav-link">My Stuff</a></li>
                <li class="switch-list-item">
                  <label class="switch">
                    <v-icon color="var(--paleSpring)">mdi-white-balance-sunny</v-icon>
                    <div>
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </div>
                    <v-icon color="var(--paleSpring)">mdi-moon-waning-crescent</v-icon>
                  </label>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>


export default {
    data() {
        return {
            dark: false
        };
    },
    methods: {
        swapMode() {
            this.dark = !this.dark;
        }
    }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: background 250ms ease-in;
  border: 1px solid black;
  height: 10vh;
}

.nav-icon {
    height: 10vh;
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
    padding: calc(var(--spacing) / 2 ) var(--spacing);
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
}

/* Lightmode Button Styles */
v-icon {
    color: var(--paleSpring)
}

.switch-list-item {
    display: flex;
    align-items: center;
}

.slider {
    transition: background-color 0.6s ease, color 1s ease;
    background-color: var(--mint);
    transition: 0.4s;
    border-radius: 100%;
    height: 3vh;
    width: 3vh;
}

.switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* --spacing: 1em;
    padding: calc(var(--spacing) / 2 ) var(--spacing); */
}

.switch div {
    transition: background-color 0.6s ease, color 1s ease;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--darkBlue);
    width: 5vh;
    border-radius: 50px;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
}

.switch input {
    display: none;
}

input:checked + .slider {
    transform: translateX(10vh);
}
/* ----------------------- */
</style>