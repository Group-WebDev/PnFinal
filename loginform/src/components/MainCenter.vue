<template>
<div>
    <SideBar />
    <br /><br /><br />
    <center>
        <h1>Center Life Analytics</h1>
    </center><br />
    <center>
        <Center1 />
        <Center2 />
        <Center3 />
        <Center4/>
        <Center5 />
        <Center6 /> 
    </center>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Center1 from '@/components/CenterLife/Center1.vue'
import Center2 from '@/components/CenterLife/Center2.vue'
import Center3 from '@/components/CenterLife/Center3.vue'
import Center4 from '@/components/CenterLife/Center4.vue'
import Center5 from '@/components/CenterLife/Center5.vue'
import Center6 from '@/components/CenterLife/Center6.vue'
export default {
    components: {
        SideBar,
        Center1,
        Center2,
        Center3,
        Center4,
        Center5,
        Center6,

    },
    data() {
        return {

        }
    }
}
</script>
