<template>
<div class="col-md-8">
    <v-container fluid>
        <v-btn @click="showanswers">Preview Answers</v-btn>
        <v-form>

            <center>
                <h1>CENTER LIFE</h1>
            </center>

            <h3>How do you feel in the center?</h3>
            <hr>

            <h3>How was your relationship to your co-scholar?</h3>

            <hr>

            <h3>How was your relationship with PN Staff?</h3>

            <hr>

            <h3>How was your overall performance and collaboration of the tasking team?</h3>

            <hr>

            <h3>What PN core values did you experience this week?</h3>

            <hr>

            <h3>What soft skill or behavior that you want to improve?</h3>

            <center>
                <h1>ACADEMICS</h1>
            </center>
            <hr>

            <h3>Which educational activities do you prefer?</h3>

            <hr>

            <h3>What subject do you find difficult?</h3>

            <hr>

            <h3>How do you deal with your difficulties?</h3>

            <hr>

            <h3>How was your relationship with your teacher?</h3>

            <hr>

            <h3>What academic skill that you want to improve?</h3>

            <hr>

            <h3>What challenges have you encounter during class?</h3>

            <br>
            <br>
        </v-form>
    </v-container>
</div>
</template>

<script>
import {showAnswers} from '@/axios/axios'
export default {
    data() {
        return {
            preview: [],
            showform: false
        }
    },
    methods: {
        showanswers() {
            this.showform = true;
            showAnswers()
                .then(data => this.preview = data[data.length-1])
                .catch((err => alert(err)));
           
        }
    }
}
</script>

<style>

</style>
