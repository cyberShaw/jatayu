<template>
  <div>
    <p class="subtitle">Location of Detection</p>
    <GMap
      ref="gMap"
      language="en"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false, styles: mapStyle}"
      :zoom="6"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
      ></GMapMarker>
    </GMap>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  props: {
    loc: [],
  },
  data() {
    return {
      currentLocation: {
        lat: parseInt(this.loc[0]),
        lng: parseInt(this.loc[1]),
      },
      circleOptions: {},
      locations: [
        {
          lat: parseInt(this.loc[0]),
          lng: parseInt(this.loc[1]),
        },
      ],
      pins: {},
      mapStyle: [],
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    };
  },
  mounted() {
    console.log(this.loc);
  },
};
</script>

<style>
#map-box {
  height: 50vh;
}
</style>
