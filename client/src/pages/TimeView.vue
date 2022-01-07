<template>
  <div class>
    <dentist-map id = "map" />
    <b-button v-on:click='testApi'>Test api connection</b-button>
  </div>
</template>

<script>
import DentistMap from '@/components/DentistMap'
import DentistCard from '@/components/DentistCard'
import TimeSlot from '../components/TimeSlot.vue'
import { Api } from '@/Api'

export default {
  components: { TimeSlot, DentistMap, DentistCard },
  name: 'TimeView',

  mounted() {

  },
  data() {
    return {
      slots: [],
      msg: 'Welcome o Your Vue.js App'
    }
  },
  methods: {
    testApi() {
      Api.post('/test', {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
object-fit: fill;
}
</style>
