<template>
  <div class="hero is-dark is-fullheight">
    <div class="hero-body">
      <h1 class="title is-1 has-text-centered">
        The Wire
      </h1>
      <h2 class="subtitle has-text-centered is-hidden-mobile">
        A State-of-the-Art Criminal Detection System.
      </h2>
      <div class="buttons">
        <nuxt-link to='/login'>
          <b-button type="is-light is-rounded is-danger is-medium">
            Log In &rarr;
          </b-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style scoped>
  .hero-body {
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    padding: 0.5rem 0;
  }
</style>
