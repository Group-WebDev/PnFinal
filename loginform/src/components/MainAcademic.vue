<template>
<div>
    <SideBar />
    <br /><br /><br />
    <center>
        <h1>Academic Life Analytics</h1>
    </center><br />
    <center>
        <Academic />
        <Academic2 />
        <Academic3 />
        <Academic5 />
        <Academic6 />
        <Academic7 />
    </center>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Academic from '@/components/Academics/Academic.vue'
import Academic2 from '@/components/Academics/Academic2.vue'
import Academic3 from '@/components/Academics/Academic3.vue'
import Academic5 from '@/components/Academics/Academic5.vue'
import Academic6 from '@/components/Academics/Academic6.vue'
import Academic7 from '@/components/Academics/Academic7.vue'
export default {
    components: {
        SideBar,
        Academic,
        Academic2,
        Academic3,
        Academic5,
        Academic6,
        Academic7

    },
    data() {
        return {

        }
    }
}
</script>
