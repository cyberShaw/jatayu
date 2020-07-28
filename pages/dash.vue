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
  // middleware: 'auth',
  data() {
    return {};
  },
};
</script>
