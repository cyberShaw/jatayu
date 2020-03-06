<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <p>Criminal Detecc</p>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Search a Criminal',
          icon: 'file-find',
          to: { name: 'search' }
        },
        {
          title: 'Recent Sightings',
          icon: 'history',
          to: { name: 'recent' }
        },
        {
          title: 'Upload Footage',
          icon: 'file-video',
          to: { name: 'upload' }
        },
        {
          title: 'Track',
          icon: 'crosshairs-gps',
          to: { name: 'track' }
        }
      ]
    }
  }
}
</script>
