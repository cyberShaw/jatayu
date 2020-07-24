<template>
    <div>
        <ProfileCard
            v-if="detections"
            :cid="$route.params.cid"
            :img_rsc="detections[0].rsrc"
        />
    </div>
</template>

<script>
import ProfileCard from '../../components/ProfileCard'
export default {
    layout: 'dashboard',
    components: {
        ProfileCard
    },
    data() {
        return {
            detections: null
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios
                .get('/detection/' + this.$route.params.cid)
                .then((res) => {
                    if (res.data && res.data.detections) {
                        this.detections = res.data.detections
                        console.log(this.detections[0].rsrc)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
