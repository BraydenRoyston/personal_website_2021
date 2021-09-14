<template>
    <!-- NOTE for the kind folks snooping around - had to rush this out, modularization is coming soon -->
    <div class="bio" :class="waveType">
        <div class="filtersWrapper">
            <h1>What do you care about?</h1>
            <h3>Click the filters below to check out my experiences that relate to your interests!</h3>
            <div class="options">
                <div class="softwareOptions">
                    <button class="option" :class="softwareActive" @click="switchFilter('Software')">
                        Software
                    </button>
                    <div class="softwareTopics">
                        <button class="option" :class="webDevActive" @click="switchFilter('WebDev')">
                            WebDev
                        </button>
                        <button class="option" :class="mobileDevActive" @click="switchFilter('MobileDev')">
                            MobileDev
                        </button>
                        <button class="option" :class="finTechActive" @click="switchFilter('FinTech')">
                            FinTech
                        </button>
                    </div>
                </div>
                <div class="optionsSpacer"></div>
                <div class="businessOptions">
                    <button class="option" :class="businessActive" @click="switchFilter('Business')">
                        Business
                    </button>
                    <div class="businessTopics">
                        <button class="option" :class="consultingActive" @click="switchFilter('Consulting')">
                            Consulting
                        </button>
                        <button class="option" :class="financeActive" @click="switchFilter('Finance')">
                            Finance
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        <p v-for="item in filters" :key="item">{{ item }}</p>
        <div class="cellWrapper">
            <div class="spacer"></div>
            <transition-group tag="ul" name="project-list">
                <PortfolioCell
                    v-for="project in liveProjects"
                    :key="project.key"
                    :title="project.title"
                    :links="project.links"
                    :description="project.description"
                    :techStack="project.techStack"
                    :tags="project.tags"
                />
            </transition-group>
            
            <div class="spacer"></div>
        </div>
    </div>
</template>

<script>
import PortfolioCell from '../Layout/PortfolioCell.vue';

export default {
    components: {
        PortfolioCell,
    },
    data() {
        return {
            Software: "Software",
            Business: "Business",
            WebDev: "WebDev",
            MobileDev: "MobileDev",
            FinTech: "FinTech",
            Finance: "Finance",
            Consulting: "Consulting",
            projects: this.$store.state.projects,
        }
    },
    methods: {
        switchFilter(filter) {
            if (filter == "Software") {
                if (this[filter] == "Software") {
                    this["WebDev"] = "";
                    this["MobileDev"] = "";
                    this["FinTech"] = "";
                } else {
                    this["WebDev"] = "WebDev";
                    this["MobileDev"] = "MobileDev";
                    this["FinTech"] = "FinTech";
                }
            } else if (filter == "Business") {
                if (this[filter] == "Business") {
                    this["Finance"] = "";
                    this["Consulting"] = "";
                } else {
                    this["Finance"] = "Finance";
                    this["Consulting"] = "Consulting";
                }
            }
            if (this[filter] == "") {
                this[filter] = filter;
            } else {
                this[filter] = "";
            }
        },
        filterProjects(project) {
            console.log(project.title);
            for (var i = 0; i < project.tags.length; i++) {
                const current_tag = project.tags[i].value;
                console.log(current_tag);
                if (
                    current_tag == this.Software ||
                    current_tag == this.Business ||
                    current_tag == this.WebDev ||
                    current_tag == this.MobileDev ||
                    current_tag == this.FinTech ||
                    current_tag == this.Finance ||
                    current_tag == this.Consulting
                ) {
                    return true;
                }
            }
            return false;
        }
    },
    computed: {
        dark() {
            return this.$store.state.dark
        },
        waveType() {
            if (!this.dark) {
                return "waveDivider";
            }
            return "waveDividerDark";
        },
        liveProjects() {
            const new_projects = this.projects.filter(this.filterProjects);
            if (new_projects.length == 0) {
                return [
                    {
                        key: 0,
                        title: "Extremely Out of Scope Project",
                        links: [
                        {
                            title: "Website", 
                            value: "http://papertoilet.com/",
                            key: 0,
                        },
                        ],
                        description: [
                        {
                            value: "It seems the intersection of your interests and my experiences is the empty set ;(",
                            key: 0,
                        },
                        {
                            value: "Unfortunately in the short term there's not much I can do here, consider being a bit more generous with the filters or feel free to check back in the future and see what I've gotten up to! :D",
                            key: 1,
                        },
                        ],
                        tags: [
                            {
                            key: 0,
                            value: "Software",
                            },
                        ],
                    }
                ];
            } else {
                return new_projects;
            }
        },
        softwareActive() {
            if (this.Software == "") {
                return ""
            }
            return "button-active";
        },
        businessActive() {
            if (this.Business == "") {
                return ""
            }
            return "button-active";
        },
        webDevActive() {
            if (this.WebDev == "") {
                return ""
            }
            return "button-active";
        },
        mobileDevActive() {
            if (this.MobileDev == "") {
                return ""
            }
            return "button-active";
        },
        finTechActive() {
            if (this.FinTech == "") {
                return ""
            }
            return "button-active";
        },
        consultingActive() {
            if (this.Consulting == "") {
                return ""
            }
            return "button-active";
        },
        financeActive() {
            if (this.Finance == "") {
                return ""
            }
            return "button-active";
        },
    }
}
</script>

<style scoped>
.bio {
  height: 90vh;
  background: var(--background);
  transition: background-color 1s ease, color 1s ease, background-image 1s ease;
  background-size: cover;
  color: var(--text);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.spacer {
    height: 5vh;
    width: 100%;
}

.filtersWrapper {
    margin-top: 15vh;
}

.options {
    display: flex;
    justify-content: center;
    align-items: center;
}

.softwareOptions {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.softwareTopics {
    width: 45%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.optionsSpacer {
    width: 10%;
    height: 100px;
    border-right: 2px solid var(--highlight);
    border-left: 2px solid var(--highlight);
}

.businessOptions {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.businessTopics {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

button {
    background: transparent;
    border-radius: 100px;
    border: 1px solid var(--text);
    padding: 5px 10px 5px 10px;
    text-align: center;
    margin: 10px;

    font-size: var(--fs-extra-small);

    transition: background-color 1s ease;
}

.button-active {
    background-color: var(--primary);
}


h1 {
    font-size: var(--fs-medium);
    color: var(--highlight);
    transition: color 1s ease;
}

h3 {
    font-size: var(--fs-small);
    color: var(--text);
    transition: color 1s ease;
}

.cellWrapper {
    width: 100vw;

    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--background);
    transition: background-color 1s ease;
}

.project-list-enter, .project-list-leave-to {
    opacity: 0;
    position: absolute;
}

.project-list-enter-active {
    transition: opacity 1s ease;
}
.project-list-leave-active {
    transition: opacity 1s ease;
    position: absolute;
}

.project-list-move {
  transition: transform 1s ease;
}


.waveDivider {
    /* aspect-ratio: 500/300; */
    width: 100%;
    
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/wave4_light.svg');
}

.waveDividerDark {
    background-image: url('../../assets/wave4_dark.svg');
}

@media screen and (max-width: 1000px) {
    .cellWrapper {
        width: 95vw;
    }
}
</style>