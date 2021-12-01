<template>
  <div>
    <p>Available Times</p>
    <b-list-group v-for="slot in slots" v-bind:key="slot.name">
      <time-slot id="list"
        v-on:expand-slot="expandSlot"
        v-bind:slot="slot"
        v-on:del-slot="deleteslot"
      />
    </b-list-group>
    <b-button v-on:click='testApi'>Test api connection</b-button>
  </div>
</template>

<script>
import TimeSlot from '../components/TimeSlot.vue'
import { Api } from '@/Api'

export default {
  components: { TimeSlot },
  name: 'TimeView',

  mounted() {
    let slot1 = { address: 'Långströmsgatan 2A', dentist: 'Pedro Borra', time: '11:27' }
    let slot2 = { address: 'Åvägen 22', dentist: 'Micke Borra', time: '11:29' }
    let slots1 = []
    slots1.push(slot1)
    slots1.push(slot2)
    this.slots = slots1
    console.log('aaa')
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
#list {
  display: inline-grid;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 1%
}
</style>
