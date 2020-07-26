<template>
  <section class="section is-main-section"></section>
</template>

<script>
import Card from '../components/Card';
import FilePicker from '../components/FilePicker';
export default {
  layout: 'dashboard',
  components: {
    Card,
    FilePicker,
  },
  data() {
    return {
      isLoading: false,
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null,
      },
    };
  },
};
</script>
