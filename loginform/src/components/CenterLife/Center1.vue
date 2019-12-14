<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q1: How do you feel in the center? </h3>
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
                    categories: ["Comfortable", "Happy", "Homesick", "Sad"],
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
            .post("http://localhost:8081/admin/report/summary/" + 1)
            .then(res => {
                var c = 0;
                var h = 0;
                var k = 0;
                var s = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Comfortable") {
                        c += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Happy") {
                        h += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Homesick") {
                        k += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Sad") {
                        s += res.data.data[i].answers
                    }
                }
                this.series[0].data = [c, h, k, s]
            })
            .catch(err => {
                console.log("Ni error", err);
            });

    }
}
</script>
