<template>
    <a :href="link" target="_blank">
        <v-icon :size="logoSize" color="var(--highlight)">{{ icon }}</v-icon>
    </a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
        }
    },
    computed: {
        logoSize() {
            if (this.windowWidth > 725) {
                return 50;
            }
            return 30;
        }
    },
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {  
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style scoped>
a {
    color: var(--text);
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
}

a:hover {
    color: var(--text); 
    text-decoration:none; 
    cursor:pointer;  
}
</style>