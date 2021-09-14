<template>
    <div class="cellWrapper">
        <div class="header">
            <div class="title">
                <h2>{{ title }}</h2>
            </div>
            <div class="links">
                <a v-for="link in links" :key="link.title" :href="link.value" target="_blank">
                    {{ link.title }}
                </a>
            </div>
        </div>
        <div class="description">
            <h3 v-for="point in description" :key="point.key">{{ point.value }}</h3>  
        </div>
        <div class="footer">
            <div class="techStack">
                <p v-for="tech in techStack" :key="tech.value">
                    {{ tech.value }}
                </p>
            </div>
            <div class="tags">
                <p v-for="tag in tags" :key="tag.value" id="tag">
                    {{ tag.value }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
        },
        links: {
            type: Array,
            required: false,
        },
        description: {
            type: Array,
            required: false,
        },
        techStack: {
            type: Array,
            required: false,
        },
        tags: {
            type: Array,
            required: false,
        }
    }
}
</script>

<style scoped>
.cellWrapper {
    width: 83vw !important;

    border-radius: 10px;
    border: 1px solid var(--text);
    transition: border-color 1s ease;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-top: 5px;
    margin-bottom: 5px;
}

.header {
    width: 90%;
    height: 15%;
    margin-top: 2.5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    color: var(--highlight);
    transition: color 1s ease;
    font-size: var(--fs-medium);
}

a {
    color: var(--highlight);
    transition: color 1s ease;
    font-size: var(--fs-small);
    padding-left: 10px;
    padding-right: 10px;
}

.description {
    width: 90%;
    height: 65%;
}

h3 {
    text-align: left;
    font-size: var(--fs-small);
    color: var(--text);
    transition: color 1s ease;
    padding-top: 5px;
    padding-bottom: 5px;
}

.techStack {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

p {
    padding: 4px;
    margin-right: 10px;
    font-size: var(--fs-extra-small);
    color: var(--text);
    background: var(--primary);
    transition: color 1s ease, background-color 1s ease;
    /* border: 1px solid black; */
    border-radius: 10px;
}

.tags {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#tag {
    margin-right: 0px;
    margin-left: 10px;
    background: var(--primary);
    transition: background-color 1s ease, color 1s ease;
}

.footer {
    width: 90%;
    height: 15%;
    margin-bottom: 2.5%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* background: red; */
}

@media screen and (max-width: 1000px) {
    .cellWrapper {
        width: 95vw !important;
    }
    .footer {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #tag {
        margin: 7px;
    }
}
</style>