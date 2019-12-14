<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q7: Which educational activities do you prefer? </h3>
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
                    categories: ["Sports", "Lecture", "Film viewing", "Clubings"],
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
            .post("http://localhost:8081/admin/report/summary/" + 7)
            .then(res => {
                var s = 0;
                var a = 0;
                var b = 0;
                var c = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Sports") {
                        s += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Film Viewing") {
                        a += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Lecture") {
                        b += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Clubings") {
                        c += res.data.data[i].answers
                    }
                }
                this.series[0].data = [s, b, a, c]
            })
            .catch(err => {
                console.log("Ni error", err);
            });

    }
}
</script>
