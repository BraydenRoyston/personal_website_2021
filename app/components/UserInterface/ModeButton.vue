<template>
    <label class="switch">
        <v-icon color="var(--text)">mdi-moon-waning-crescent</v-icon>
        <div>
            <input type="checkbox" @change="modeChange"/>
            <span class="slider"></span>
        </div>
        <v-icon color="var(--text)">mdi-white-balance-sunny</v-icon>
    </label>
</template>

<script>
export default {
    methods: {
        modeChange() {
            this.$store.commit('changeMode');
        }
    },
}
</script>

<style scoped>
.switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

v-icon {
    transition: color 1s ease !important;
}

.switch div {
    transition: background-color 1s ease, color 1s ease;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--text);
    width: 50px;
    height: 25px;
    border-radius: 50px;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
}

.switch input {
    display: none;
}

.slider {
    transition: background-color 1s ease, color 1s ease;
    background-color: var(--primary);
    transition: 1s;
    border-radius: 100%;
    height: 20px;
    width: 20px;
}

input:checked + .slider {
    transform: translateX(19px);
}
</style>