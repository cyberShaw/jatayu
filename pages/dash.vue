<template>
  <div class="section">
    <p class="title has-text-centered">Dashboard</p>
    <p class="subtitle has-text-centered">Coming Soon!</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  layout: 'dashboard',
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
