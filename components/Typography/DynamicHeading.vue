<template>
    <p>{{ text }}</p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: "Error: Missing text prop",
        },
    },
}
</script>

<style scoped>
p {
    color: var(--highlight);
    font-weight: 700;
    font-size: var(--fs-large);
    transition: color 1s ease;
}
</style>