<template>
  <div id="mapContainer" style="height: 500px">
    <div class="col d-flex justify-content-center">
    <dentist-card id="card" v-if="showCard"></dentist-card></div>
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
import DentistCard from './DentistCard.vue'

export default {
  name: 'Map',
  components: {
    DentistCard,
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
      coordinates: latLng(57.7114106, 11.9068784),
      showCard: false
    }
  },
  methods: {
    clickFunction() {
      this.showCard = true
    }
  }
}

</script>
<style scoped>
#map{
    height: 100%;
    z-index: 8;
}
#card{
  position: absolute;
  z-index: 9;
  top: 40%;
  align-items: center;

}
</style>
