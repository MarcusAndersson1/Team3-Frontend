<template>
  <div class>
    <dentist-map id = "map" />
  </div>
</template>

<script>
import DentistMap from '@/components/DentistMap'
import DentistCard from '@/components/DentistCard'
import TimeSlot from '../components/TimeSlot.vue'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
object-fit: fill;
}
</style>
