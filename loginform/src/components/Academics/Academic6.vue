<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q11: What academic skill that you want to improve?</h3>
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
                    categories: ["Critical Thinking", "Understanding", "Application", "Coding"]
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
                data: []
            }]
        }
    },
    mounted() {
        axios
            .post("http://localhost:8081/admin/report/summary/" + 11)
            .then(res => {
                var t = 0;
                var u = 0;
                var a = 0;
                var c = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Critical Thinking") {
                        t += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Understanding") {
                        u += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Application") {
                        a += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Coding") {
                        c += res.data.data[i].answers
                    }
                }
                this.series[0].data = [t, u, a, c]
            })
            .catch(err => {
                console.log("Ni error", err);
            });
    }
}
</script>
