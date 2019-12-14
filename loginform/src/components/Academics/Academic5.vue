<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q10: How was your relationship with your teacher?</h3>
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
                    categories: ["Respectful", "Courteus", "Educational", "Helpful"]
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
            .post("http://localhost:8081/admin/report/summary/" + 10)
            .then(res => {
                var r = 0;
                var c = 0;
                var e = 0;
                var h = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Respectful") {
                        r += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Courteus") {
                        c += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Educational") {
                        e += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Helpful") {
                        h += res.data.data[i].answers
                    }
                }
                this.series[0].data = [r, c, e, h]
            })
            .catch(err => {
                console.log("Ni error", err);
            });
    }
}
</script>
