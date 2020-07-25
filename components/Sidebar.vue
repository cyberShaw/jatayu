<template>
  <b-menu activable>
    <b-menu-list label="Dashboard">
      <b-menu-item
        @click="$router.push('/dash')"
        icon="information-outline"
        label="Dashboard"
      ></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Track & Detect">
      <b-menu-item
        @click="$router.push('/detections')"
        icon="settings"
        label="Detections"
      ></b-menu-item>
      <b-menu-item
        @click="$router.push('/track')"
        icon="crosshairs-gps"
        label="Recents & Tracking"
      ></b-menu-item>
      <b-menu-item
        @click="$router.push('/watchlist')"
        icon="crosshairs-gps"
        label="Watchlist"
      ></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Upload">
      <b-menu-item
        @click="$router.push('/upload/video')"
        icon="settings"
        label="Upload a Video"
      ></b-menu-item>
      <b-menu-item
        @click="$router.push('/upload/photo')"
        icon="settings"
        label="Upload a Photo"
      ></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Account">
      <b-menu-item @click="$router.push('/profile')" label="Profile"></b-menu-item>
      <b-menu-item @click="$router.push('/')" label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss"></style>
