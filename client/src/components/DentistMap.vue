<template>
  <div style="height: 1000px">
    <l-map :zoom="zoom" :center="center" ref="map" id="map" style="width: 100%">
      <LTileLayer :url="url"></LTileLayer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker
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
      bounds: null
    }
  },
  methods: {
  }
}
</script>
<style scoped>
#map{
    height: 100%;
}
</style>
