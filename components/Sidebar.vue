<template>
  <div class="sidebar-container">
    <b-menu activable>
      <b-menu-list label="Dashboard">
        <b-menu-item
          @click="$router.push('/analytics')"
          icon="chart-bar"
          icon-pack="fas"
          label="Analytics"
        ></b-menu-item>
        <b-menu-item
          @click="$router.push('/dash')"
          icon="tachometer-alt"
          icon-pack="fas"
          label="Watchlist"
        ></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Detect & Track">
        <b-menu-item
          @click="$router.push('/detections')"
          icon="exclamation-triangle"
          icon-pack="fas"
          label="Detections"
        ></b-menu-item>
        <b-menu-item
          @click="$router.push('/criminals')"
          icon="user-ninja"
          icon-pack="fas"
          label="Criminals"
        ></b-menu-item>
        <b-menu-item
          @click="$router.push('/track')"
          icon="search-location"
          icon-pack="fas"
          label="Recents & Tracking"
        ></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Upload">
        <b-menu-item
          @click="$router.push('/upload/video')"
          icon="video"
          icon-pack="fas"
          label="Upload a Video"
        ></b-menu-item>
        <b-menu-item
          @click="$router.push('/upload/photo')"
          icon="images"
          icon-pack="fas"
          label="Upload a Photo"
        ></b-menu-item>
        <b-menu-item
          @click="$router.push('/results')"
          icon="poll-h"
          icon-pack="fas"
          label="Results"
        ></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Account">
        <b-menu-item
          @click="$router.push('/profile')"
          icon="id-badge"
          icon-pack="fas"
          label="Profile"
        ></b-menu-item>
        <b-menu-item
          @click="signOut"
          icon="sign-out-alt"
          icon-pack="fas"
          label="Sign Out"
        ></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    signOut() {
      this.$store
        .dispatch('signOut')
        .then(() => {
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.sidebar-container {
  margin-top: 7vh;
}
</style>
