<template>
<div>
  <SideBar/>
<div class="table">
    <div v-for="(ans , index) in answers" :key="index">
        <Props :score="ans" :questionLabel="questions[index]">
            <v-card class="mx-auto" max-width="344">
                <v-card-text>
                    <div>Word of the Day</div>
                    <p class="display-1 text--primary">
                        be•nev•o•lent
                    </p>
                    <p>adjective</p>
                    <div class="text--primary">
                        well meaning and kindly.<br>
                        "a benevolent smile"
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="deep-purple accent-4">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </Props>
    </div>
    <!-- <Props :score="answers" :question="2"/> -->
</div>
</div>
</template>

<script>
import SideBar from "@/components/SideBar"
import Props from "@/components/AnalyticsProps.vue";
import axios from "axios";
export default {
    name: "Analytics",
    data() {
        return {
            questions: [
                "How do you feel in the center?",
                "How was your relationship to your co-scholar?",
                "How was your relationship with PN Staff?",
                "How was your overall performance and collaboration of the tasking team?",
                "What PN core values did you experience this week?",
                "What soft skill or behavior that you want to improve?", //Academic
                "Which educational activities do you prefer?",
                "What subject do you find difficult?",
                "How do you deal with your difficulties?",
                "How was your relationship with your teacher?",
                "What academic skill that you want to improve?",
                "What challenges have you encounter during class?"
            ],
            answers: [],
            total: []
        };
    },
    components: {
        Props,
        SideBar
    },
    mounted() {
        var i = 1;
        for (i; i < 13; i++) {
            axios
                .post("http://localhost:8081/admin/report/summary/" + i)
                .then(res => {
                    this.total.push(res.data.data.length)
                    this.answers.push(res.data.data);
                })
                .catch(err => {
                    console.log("Ni error", err);
                });
        }
    }
};
</script>
