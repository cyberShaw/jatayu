<template>
  <div class="page">
    <ProfileCard v-if="criminals" :cid="$route.params.cid" :img_rsc="criminals[0].picture" />
  </div>
</template>

<script>
import ProfileCard from '../../components/ProfileCard';
export default {
  layout: 'dashboard',
  components: {
    ProfileCard,
  },
  data() {
    return {
      criminals: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get('https://coders-of-blaviken-api.herokuapp.com/api/criminals/' + this.$route.params.cid)
        .then(res => {
          if (res.data && res.data.criminals) {
            this.criminals = res.data.criminals;
            console.log(this.criminals[0].rsrc);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // criminalDetails() {
    //   this.
    // }
  },
};
</script>
