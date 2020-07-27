<template>
  <div class="page">
    <PageHead title="Watchlist" subtitle="Dashboard" />
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';
import PageHead from '@/components/PageHead';

export default {
  layout: 'dashboard',
  components: {
    PageHead,
  },
  data() {
    return {
      email: '',
    };
  },

  mounted() {
    this.$axios
      .get('/me')
      .then(res => {
        this.email = res.data.email;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/');
    },
  },
};
</script>
