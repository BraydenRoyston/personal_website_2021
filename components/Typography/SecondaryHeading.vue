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
        }
    }
}
</script>

<style scoped>
p {
    color: var(--text);
    font-weight: 500;
    font-size: var(--fs-medium);
    transition: color 1s ease;
}
</style>