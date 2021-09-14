<template>
    <div class="spacer"></div>
</template>

<script>
export default {
    props: {
        observer: {
            type: IntersectionObserver,
            required: false,
        },
    },
    mounted() {
        this.observer.observe(this.$el);
    }
}
</script>

<style scoped>
.spacer {
    width: 100vw;
    height: 10vh;
    background: cover;
    background-color: var(--background);

    scroll-snap-align: start;
}
</style>