<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q2: How was your relationship to your co-scholar? </h3>
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
                    categories: ["Good", "Normal", "Bad"],
                },
                theme: {
                    palette: 'palette1' // upto palette10
                },
                plotOptions: {
                    bar: {
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
            .post("http://localhost:8081/admin/report/summary/" + 2)
            .then(res => {
                var g = 0;
                var n = 0;
                var b = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                     if (res.data.data[i]._id == "Good") {
                        g += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Normal") {
                        n += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Bad") {
                        b += res.data.data[i].answers
                    }
                }
                this.series[0].data = [g, n, b]
            })
            .catch(err => {
                console.log("Ni error", err);
            });

    }
}
</script>
