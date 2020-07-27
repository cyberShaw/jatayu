<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <div class="tile notification is-child is-danger">
            <figure class="image is-4by3">
              <img id="c-image" class="zoom" alt="Placeholder image" />
            </figure>
          </div>
          <div class="tile notification is-child is-danger">
            <div class="media">
              <div class="media-left">
                <!-- <figure class="image is-48x48"> -->
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                <!-- </figure> -->
              </div>
              <div class="media-content">
                <p class="title is-4">{{ cid }}</p>
                <p class="subtitle is-6">Criminal ID</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile notification is-child is-success">
          <p class="title">
            Locations Detected
          </p>
          <GMap
            ref="gMap"
            language="en"
            :cluster="{options: {styles: clusterStyle}}"
            :center="{
              lat: locations[0].lat,
              lng: locations[0].lng,
            }"
            :options="{
              fullscreenControl: false,
              styles: mapStyle,
            }"
            :zoom="6"
          >
            <GMapMarker
              v-for="location in locations"
              :key="location.id"
              :position="{lat: location.lat, lng: location.lng}"
              :options="{
                icon: location === currentLocation ? pins.selected : pins.notSelected,
              }"
              @click="currentLocation = location"
            >
              <GMapInfoWindow :options="{maxWidth: 200}">
                <code>
                  lat: {{ location.lat }}, lng:
                  {{ location.lng }}
                </code>
              </GMapInfoWindow>
            </GMapMarker>
            <GMapCircle :options="circleOptions" />
          </GMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: ['cid', 'img_rsc'],
  mounted() {
    document.getElementById('c-image').setAttribute('src', this.img_rsc);
  },
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: '15.9819',
        },
        {
          lat: '45.12',
          lng: '16.21',
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
};
</script>
