<template>
  <div id="mapContainer" style="height: 500px">
    <l-map :zoom="zoom" :center="center" ref="map" id="map" style="width: 100%">
      <l-marker :key="marker.id" v-for="marker in coordinates" :lat-lng="marker" @click="clickFunction()">
        <l-popup id="customPopup"><div class="col d-flex justify-content-center">
    <dentist-card id="card" ></dentist-card></div></l-popup>
      </l-marker>
      <LTileLayer :url="url"></LTileLayer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import { latLng } from 'leaflet'
import DentistCard from './DentistCard.vue'
import { Api } from '@/Api'

export default{
  name: 'Map',
  components: {
    DentistCard,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip

  },
  data() {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 12,
      center: [13.1367826, 77.5711133],
      bounds: null,
      coordinates: [],
      showCard: false
    }
  },
  mounted() {
    Api.get('/timeslots')
      .then((response) => {
        console.log(response.data.length)
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
          this.coordinates.push(latLng(response.data[i].clinic.coordinate.latitude, response.data[i].clinic.coordinate.longitude))
          console.log(this.coordinates[i])
        }
      })
      .catch((error) => {
        console.log(error)
      })
    navigator.geolocation.getCurrentPosition(
      position => {
        this.center = [position.coords.latitude, position.coords.longitude]
      },
      error => {
        console.log(error.message)
      }
    )
  },
  methods: {
    clickFunction() {
      this.showCard = !this.showCard
    }

  }
}

</script>
<style scoped>

#customPopup, .leaflet-popup-tip-container {
    width:100px;
    height:15px;
}

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
