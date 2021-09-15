<template>
    <!-- NOTE for the kind folks snooping around - had to rush this out, modularization is coming soon -->
    <!-- good luck reading this, i apologize in advance ;-; -->
    <div>
        <div class="portfolio" :class="waveType">
            <div class="filtersWrapper">
                <h1>What do you care about?</h1>
                <h3>Click the filters below to check out my experiences that relate to your interests!</h3>
                <div class="options">
                    <div class="softwareOptions">
                        <div class="option" :class="softwareActive" @click="switchFilter('Software')" id="big">
                            Software Topics
                        </div>
                        <!-- v-if="showSoftwareOptions"  -->
                        <transition name="softwareTopicsTransition" appear>
                            <div class="softwareTopics">
                                <button class="option" :class="InternshipActive" @click="switchFilter('Internship')">
                                    Internships
                                </button>
                                <button class="option" :class="webDevActive" @click="switchFilter('WebDev')">
                                    WebDev
                                </button>
                                <button class="option" :class="mobileDevActive" @click="switchFilter('MobileDev')">
                                    MobileDev
                                </button>
                                <button class="option" :class="finTechActive" @click="switchFilter('FinTech')">
                                    FinTech
                                </button>
                                <button class="option" :class="hackathonActive" @click="switchFilter('Hackathon')">
                                    Hackathons
                                </button>
                            </div>
                        </transition>
                    </div>
                    <div class="optionsSpacer"></div>
                    <div class="businessOptions">
                        <div class="option" :class="businessActive" @click="switchFilter('Business')" id="big">
                            Business Topics
                        </div>
                        <!-- v-if="showBusinessOptions" -->
                        <transition name="businessTopicsTransition"  appear>
                            <div class="businessTopics">
                                <button class="option" :class="consultingActive" @click="switchFilter('Consulting')">
                                    Consulting
                                </button>
                                <button class="option" :class="financeActive" @click="switchFilter('Finance')">
                                    Finance
                                </button>
                                <button class="option" :class="caseCompetitionActive" @click="switchFilter('CaseCompetition')">
                                    Case Competitions
                                </button>
                            </div>
                        </transition>
                    </div>
                    
                </div>
            </div>
             <div class="cellWrapper">
                <transition-group name="project-list" id="ul-projects" appear>
                    <PortfolioCell
                        v-for="project in liveProjects"
                        :key="project.title"
                        :title="project.title"
                        :links="project.links"
                        :description="project.description"
                        :techStack="project.techStack"
                        :tags="project.tags"
                    />
                </transition-group>
                <div class="bottomWave" :class="bottomWaveType"></div>
                <NavSpacer />
                <FooterSection />
            </div>
        </div>        
    </div>
</template>

<script>
import PortfolioCell from '../Layout/PortfolioCell.vue';
import NavSpacer from '../Layout/NavSpacer.vue';
import FooterSection from './FooterSection.vue';


export default {
    components: {
        PortfolioCell,
        NavSpacer,
        FooterSection,
    },
    data() {
        return {
            Software: "",
            Business: "",
            Internship: "",
            WebDev: "",
            MobileDev: "",
            FinTech: "",
            Hackathon: "",
            Finance: "",
            Consulting: "",
            CaseCompetition: "",
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
                    this["Internship"] = "";
                    this["Hackathon"] = "";
                } else {
                    this["WebDev"] = "WebDev";
                    this["MobileDev"] = "MobileDev";
                    this["FinTech"] = "FinTech";
                    this["Internship"] = "Internship";
                    this["Hackathon"] = "Hackathon";
                }
            } else if (filter == "Business") {
                if (this[filter] == "Business") {
                    this["Finance"] = "";
                    this["Consulting"] = "";
                    this["CaseCompetition"] = "";
                } else {
                    this["Finance"] = "Finance";
                    this["Consulting"] = "Consulting";
                    this["CaseCompetition"] = "Case Competition";
                }
            }
            if (this[filter] == "") {
                if (filter == "CaseCompetition") {
                    this[filter] = "Case Competition";
                } else {
                    this[filter] = filter;
                }
            } else {
                this[filter] = "";
            }
            if (this["WebDev"] == "" &&
                this["MobileDev"] == "" &&
                this["FinTech"] == "" &&
                this["Internship"] == "" &&
                this["Hackathon"] == "") {
                    this["Software"] = "";
            }
            if (this["Finance"] == "" &&
                this["Consulting"] == "" &&
                this["CaseCompetition"] == "") {
                    this["Business"] = "";
            }
        },
        filterProjects(project) {
            for (var i = 0; i < project.tags.length; i++) {
                const current_tag = project.tags[i].value;
                if (
                    current_tag == this.Internship ||
                    current_tag == this.WebDev ||
                    current_tag == this.MobileDev ||
                    current_tag == this.FinTech ||
                    current_tag == this.Hackathon ||
                    current_tag == this.Finance ||
                    current_tag == this.Consulting ||
                    current_tag == this.CaseCompetition
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
        bottomWaveType() {
            if (!this.dark) {
                return "";
            }
            return "bottomWaveDark";
        },
        showSoftwareOptions() {
            return (this.Software == "Software");
        },
        showBusinessOptions() {
            return (this.Business == "Business");
        },
        liveProjects() {
            return this.projects.filter(this.filterProjects);
        },
        softwareActive() {
            if (this.Software == "") {
                return ""
            }
            return "button-active";
        },
        businessActive() {
            if (this.Business == "") {
                return "";
            }
            return "button-active";
        },
        InternshipActive() {
            if (this.Internship == "") {
                return "";
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
        hackathonActive() {
            if (this.Hackathon == "") {
                return "";
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
        caseCompetitionActive() {
            if (this.CaseCompetition == "") {
                return "";
            }
            return "button-active";
        },
    }
}
</script>

<style scoped>
.portfolio {
    scroll-behavior: smooth;
    height: 95vh;
    width: 100vw;
    background: var(--background);
    transition: background-color 1s ease, color 1s ease, background-image 1s ease;
    background-size: cover;
    color: var(--text);
    text-align: center;

    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.spacer {
    height: 5vh;
    width: 100%;
}

.filtersWrapper {
    margin-top: 15vh;
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.options {
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.softwareOptions {
    height: inherit;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}

.softwareTopics {
    width: 90%;
    
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: flex-end;
    align-items: center;
}

.optionsSpacer {
    width: 10%;
    height: inherit;
    /* border-right: 2px solid var(--highlight); */
    /* border-left: 2px solid var(--highlight); */
}

.businessOptions {
    height: inherit;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.businessTopics {
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

button {
    white-space: nowrap;
    background: transparent;
    border-radius: 100px;
    border: 1px solid var(--text);
    padding: 5px 10px 5px 10px;
    text-align: center;
    margin: 10px;

    font-size: var(--fs-extra-small);

    transition: all 1s ease;
}

#big {
    padding: 10px 15px 10px 15px;
    font-size: var(--fs-small);
    color: var(--highlight);
    transition: color 1s ease;
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
    /* position: fixed; */
    /* left: 0; */
    z-index: 0;
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
    position: static !important;
    /* position: absolute; */
}
.project-list-leave-active {
    transition: opacity 1s ease;
    position: absolute;
}

.project-list-move {
  transition: transform 1s ease;
    /* position: static !important; */

}

#ul-projects {
    z-index: 100;
}
.softwareTopicsTransition-enter-active, .softwareTopicsTransition-leave-active,
.businessTopicsTransition-enter-active, .businessTopicsTransition-leave-active{
  transition: opacity 1s;
}
.softwareTopicsTransition-enter, .softwareTopicsTransition-leave-to,
.businessTopicsTransition-enter, .businessTopicsTransition-leave-to  {
  opacity: 0;
}

.bottomWave {
    width: 100%;
    height: 100vh;
    margin-top: -40vh;
    z-index: 0 !important;

    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/wave1_light.svg');
    transition: all 1s ease !important;
}

.bottomWaveDark {
    width: 100%;
    height: 100vh;
    margin-top: -40vh;
    z-index: 0 !important;

    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;

    background-image: url('../../assets/wave1_dark.svg');
    transition: all 1s ease !important;
}

.waveDivider {
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
        /* width: 100vw; */
    }
    button {
        z-index: 1000 !important;
    }
}

@media screen and (max-width: 1200px) {
    .softwareTopics {
        flex-wrap: wrap;
    }
    .businessTopics {
        flex-wrap: wrap;
    }
    .cellWrapper {
        margin-top: 7vh;
    }
}
</style>