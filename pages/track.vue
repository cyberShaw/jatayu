<template>
  <div class="page">
    <PageHead subtitle="Detect & Track" title="Recents & Tracking" />
    <Card class="has-table" title="Criminal Detections">
      <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: parseFloat(locations[0].lat), lng: parseFloat(locations[0].lng)}"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="6"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
              <p @click="openInNewWindow(location.lat, location.lng)">Open location in Google Maps</p>
            </code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
    </Card>
  </div>
</template>

<script>
import PageHead from '@/components/PageHead';
import Card from '@/components/Card';
export default {
  layout: 'dashboard',
  components: {
    PageHead,
    Card,
  },
  data() {
    return {
      currentLocation: {
        lat: '11.0168',
        lng: '76.9558',
      },
      circleOptions: {},
      locations: [
        {
          lat: '13.0168',
          lng: '76.9558',
        },
        {
          lat: '14.0268',
          lng: '77.9158',
        },
        {
          lat: '11.0268',
          lng: '74.9108',
        },
        {
          lat: '16.0268',
          lng: '76.9158',
        },
        {
          lat: '18.0168',
          lng: '76.9158',
        },
        {
          lat: '12.0268',
          lng: '76.9108',
        },
        {
          lat: '11.1268',
          lng: '80.9158',
        },
        {
          lat: '11.1268',
          lng: '76.9160',
        },
        {
          lat: '16.0268',
          lng: '76.9158',
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
    // console.log(this.loc);
  },
  methods: {
    openInNewWindow(lat, lng) {
      let query = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng;
      window.open(query);
    },
  },
};
</script>
