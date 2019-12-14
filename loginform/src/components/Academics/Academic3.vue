<template>
<div>
    <v-card>
    <br/><br/>
        <h3>Q9: How do you deal with your difficulties?</h3>
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
                    }
                },
                xaxis: {
                    categories: ["Self Study", "Ask for Help", "Tutorial"]
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
            .post("http://localhost:8081/admin/report/summary/" + 9)
            .then(res => {
                var s = 0;
                var a = 0;
                var t = 0;
                console.log("hi", this.series[0].data)
                // var datas = ""
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == "Self Study") {
                        s += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Ask for Help") {
                        a += res.data.data[i].answers
                    } else if (res.data.data[i]._id == "Tutorial") {
                        t += res.data.data[i].answers
                    }
                }
                this.series[0].data = [s, a, t]
            })
            .catch(err => {
                console.log("Ni error", err);
            });
    }

}
</script>
