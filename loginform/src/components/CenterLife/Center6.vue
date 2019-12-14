<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q6: What soft skill or behavior that you want to improve?</h3>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </v-card>
</div>
</template>

<script>
import axios from "axios"
export default {
    data: function () {
        return {
            chartOptions: {
                options: {
                    chart: {
                        id: 'vuechart-example'
                    },
                },
                xaxis: {
                    categories: ["Listening Skill", "Anger Management", "Sensitivity to Others", "Punctuality", "Politiness", "Self Awareness", "Patience", "Honesty"],
                },
                theme: {
                    palette: 'palette1' // upto palette10
                },
                plotOptions: {
                    bar: {
                        distributed: true
                    }
                },

            },
            series: [{
                name: 'series-1',
                data: [],

            }],
            // cats: [],
            // ids: []
        }
    },
    mounted() {

        axios
            .post("http://localhost:8081/admin/report/summary/" + 6)
            .then(res => {
                var a = 0;
                var b = 0;
                var c = 0;
                var d = 0;
                var e = 0;
                var f = 0;
                var g = 0;
                var h = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Listening Skill") {
                        a += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Anger Management") {
                        b += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Sensitivity to Others") {
                        c += res.data.data[i].answers
                    } else if (res.data.data[i]._id =="Punctuality") {
                        d += res.data.data[i].answers
                    }else if (res.data.data[i]._id == "Politiness") {
                        e += res.data.data[i].answers
                    }else if (res.data.data[i]._id == "Self Awareness") {
                        f += res.data.data[i].answers
                    }else if (res.data.data[i]._id == "Patience") {
                        g += res.data.data[i].answers
                    }else if (res.data.data[i]._id == "Honesty") {
                        h += res.data.data[i].answers
                    }
                }
                this.series[0].data = [a, b, c, d, e, f, g, h]
            })
            .catch(err => {
                console.log("Ni error", err);
            });

    }
}
</script>
