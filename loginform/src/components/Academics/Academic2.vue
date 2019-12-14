<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q8: What subject do you find difficult?</h3>
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
                    categories: ["Programming", "Web Development", "Networking", "Database", "Computer Science"]
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
            .post("http://localhost:8081/admin/report/summary/" + 8)
            .then(res => {
                var p = 0;
                var w = 0;
                var n = 0;
                var d = 0;
                var c = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Programming") {
                        p += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Web Development") {
                        w += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Networking") {
                        n += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Database") {
                        d += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Computer Science") {
                        c += res.data.data[i].answers
                    }
                }
                this.series[0].data = [p, w, n, d, c]
            })
            .catch(err => {
                console.log("Ni error", err);
            });
    }
}
</script>
