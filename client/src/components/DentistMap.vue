<template>
  <div id="mapContainer" style="height: 1080px">
    <l-map :zoom="zoom" :center="center" ref="map" id="map" style="width: 100%">
      <l-marker :key="marker.data" v-for="marker in coordinates" :lat-lng="marker.location" @click="clickFunction(marker.data)">
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
      clinics: [],
      showCard: false,
      selectedC: {}
    }
  },
  mounted() {
    Api.get('/timeslots')
      .then((response) => {
        console.log(response.data.length)
        console.log(response)
        this.clinics = response.data
        for (let i = 0; i < response.data.length; i++) {
          let resp = response.data[i]
          let clinicL = {location: latLng(resp.clinic.coordinate.latitude, resp.clinic.coordinate.longitude),
            data: resp}
          this.coordinates.push(clinicL)
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
    clickFunction(data) {
      this.showCard = !this.showCard
      this.selectedC = data
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
