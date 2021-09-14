<template>
    <div class="spacer"></div>
</template>

<style scoped>
.spacer {
    width: 100vw;
    height: 10vh;
    background: cover;
    transition: background-color 1s ease;
    background-color: var(--navSpacer);

    scroll-snap-align: start;
    margin-top: -1px;
}
</style>