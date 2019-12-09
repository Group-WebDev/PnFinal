<template>
<div>
<Sidebar/>
  <div class="table">
    <div v-for="(ans , index) in answers" :key="index">
      <Props :score="ans" :questionLabel="questions[index]"/>
    </div>
    <!-- <Props :score="answers2" :question="2"/> -->
  </div>
  </div>
</template>

<script>
import axios from "axios"   
import Props from "@/components/AnalyticsProps.vue";
import Sidebar from '@/components/SideBar.vue'
// import axios from "axios"
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
      answers: []
      //   answers2: [{ num: "Jisoo", num: "Baby", num: "Kalabaw" }],
      //   answers3: []
    };
  },
  components: {
    Props,
    Sidebar
  },
//   mounted() {
//     for (let i = 0; i < 12; i++) {
//       this.answers.push([
//         { num: "Jane" },
//         { num: "Repollo" },
//         { num: "Self" },
//         { num: "Jisoo" },
//         { num: "Baby" },
//         { num: "Kalabaw" }
//       ]);
//     }
//   }
async mounted() {
     var i = 1;
    for (i; i < 13; i++) {
     const response =  await axios
        .get("http://localhost:8081/admin/report/summary/" + i )
        this.answers.push(response.data.data);
        // .then(res => {
        //   // console.log(res.data.data);
        //   this.answers.push(res.data.data);
        //   // this.total = res.data.data[0].length;
        // })
        // .catch(err => {
        //   console.log("Ni error", err);
        // });
        // console.log(this.answers, "Hello") 
    }
  }
//   data:
//       [{ num: "Jane" },
//       { num: "Repollo" },
//       { num: "Self" },
//       { num: "Jisoo" },
//       { num: "Baby" },
//       { num: "Kalabaw" }]
};
</script>