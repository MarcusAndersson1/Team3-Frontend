<template>
  <div id="mapContainer" style="height: 500px">
    <l-map :zoom="zoom" :center="center" ref="map" id="map" style="width: 100%">
      <l-marker :lat-lng="coordinates" @click="clickFunction()">
      </l-marker>
      <LTileLayer :url="url"></LTileLayer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import { latLng } from 'leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.center = [position.coords.latitude, position.coords.longitude]
      },
      error => {
        console.log(error.message)
      }
    )
  },
  data() {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 12,
      center: [13.1367826, 77.5711133],
      bounds: null,
      coordinates: latLng(57.7114106, 11.9068784)
    }
  },
  methods: {
    clickFunction() {
      console.log('clicked')
    }
  }
}
</script>
<style scoped>
#map{
    height: 100%;
}
</style>
