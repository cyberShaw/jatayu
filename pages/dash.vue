<template>
  <div class="section">
    lol
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
