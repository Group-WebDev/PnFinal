<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q5: What PN core values did you experience this week?</h3>
        <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
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
                    categories: ["Demand", "Respect", "Responsibility", "Solidarity", "Trust"],
                },
                theme: {
                    palette: 'palette1' // upto palette10
                },
                plotOptions: {
                    area: {
                        distributed: true
                    }
                },
                 dataLabels: {
                    enabled: false
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
            .post("http://localhost:8081/admin/report/summary/" + 5)
            .then(res => {
                var d = 0;
                var r = 0;
                var b = 0;
                var s = 0;
                var t = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Demand") {
                        d += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Respect") {
                        r += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Responsibility") {
                        b += res.data.data[i].answers
                    } else if (res.data.data[i]._id =="Solidarity") {
                        s += res.data.data[i].answers
                    }else if (res.data.data[i]._id == "Trust") {
                        t += res.data.data[i].answers
                    }
                }
                this.series[0].data = [d, r, b, s, t]
            })
            .catch(err => {
                console.log("Ni error", err);
            });

    }
}
</script>
