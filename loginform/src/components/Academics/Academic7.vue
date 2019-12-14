<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q12: What challenges have you encounter during class?</h3>
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
                        id: 'vuechart-example',

                    },
                },
                xaxis: {
                    categories: ["Teacher Communication", "Classmates Communication", "Understanding the Lesson"]
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
            .post("http://localhost:8081/admin/report/summary/" + 12)
            .then(res => {
                var t = 0;
                var c = 0;
                var u = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Teacher Communication") {
                        t += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Classmates Communication") {
                        c += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Understanding the Lesson") {
                        u += res.data.data[i].answers
                    }
                }
                this.series[0].data = [t, c, u, ]
            })
            .catch(err => {
                console.log("Ni error", err);
            });
    }
}
</script>
