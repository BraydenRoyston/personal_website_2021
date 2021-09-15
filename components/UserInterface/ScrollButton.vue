<template>
    <a href="#bio">
        <v-icon size="40" color="var(--highlight)" class="icon1">mdi-chevron-down</v-icon>
    </a>
</template>

<script>
export default {

}
</script>

<style scoped>
.circle {
    border-radius: 50%;
    border: 3px solid var(--highlight);
    transition: border-color 1s ease;

    height: 8vh;
    width: 8vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    /* position: absolute; */
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 5px;
}

.icon1 {
    animation: scrollDown 2s linear 1s infinite normal;
    transition: color 1s ease;
}

@keyframes scrollDown {
    0% {
        transform: translateY(-20px);
        opacity: 1;
    }
    100% {
        transform: translateY(20px);
        opacity: 0%;
    }
}

@media screen and (max-width: 725px) {
    @keyframes scrollDown {
        0% {
            transform: translateY(-12px);
            opacity: 1;
        }
        100% {
            transform: translateY(12px);
            opacity: 0%;
        }
    }
}


</style>