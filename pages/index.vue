<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Search" icon="file-find">
        Search criminals from records
      </card>

      <card title="Recent Sightings" icon="history">
        <b class="has-text-grey">
          Comprehensive
        </b>
        tracking history
      </card>

      <card title="Contribute" icon="file-video">
<<<<<<< HEAD
        Upload footage to 
        <b class="has-text-grey">
          empower
        </b>
      </card>

      <card title="Track" icon="crosshairs-gps">
        <b class="has-text-grey">
          Real-time
        </b> 
        criminal tracking
=======
        Upload footage to empower
      </card>

      <card title="Track" icon="crosshairs-gps">
        Real-time criminal tracking
>>>>>>> 754cc8bd5089365f9bdef449c556358e3849de83
      </card>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        The web-app for SIH 2020. Made with ❤️ by Coders of Blaviken 🔥
      </div>
    </footer>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
