<template>
  <div class>
    <h1>{{clinic.clinic.name}}</h1>
    <h3> Address: {{clinic.clinic.address}}</h3>
    <h4> Monday: {{clinic.clinic.openinghours.monday}}</h4>
    <h4> Tuesday: {{clinic.clinic.openinghours.tuesday}}</h4>
    <h4> Wednesday: {{clinic.clinic.openinghours.wednesday}}</h4>
    <h4> Thursday: {{clinic.clinic.openinghours.thursday}}</h4>
    <h4> Friday: {{clinic.clinic.openinghours.friday}}</h4>
    <h4>Saturday & Sunday: CLOSED</h4>
    <br/>
    <b-row align-h="start">
    <b-col v-for="slot in clinic.timeslots" v-bind:key="slot.name" cols="12" sm="6" md="3">
      <time-slot id="list"
        v-bind:slot="slot"
        v-on:book-time="bookTime"
      />
    </b-col>
    </b-row>
    <b-col></b-col>
  </div>
</template>

<script>
import DentistCard from '@/components/DentistCard'
import TimeSlot from '../components/TimeSlot.vue'
import { Api } from '@/Api'

export default {
  components: { TimeSlot, DentistCard },
  name: 'dentistPage',

  mounted() {
    let slots1 = []
    this.slots = slots1
    this.clinic = this.$route.params.data
    console.log('data is', this.clinic)
  },
  data() {
    return {
      slots: [],
      clinic: {},
      msg: 'Welcome o Your Vue.js App'
    }
  },
  methods: {
    testApi() {
      Api.post('/test', {}).then((response) => {
        console.log(response)
      })
    },
    bookTime(timeslotid) {
      Api.patch('/timeslots', {clinic: this.clinic._id, timeslot: timeslotid}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {text-align: center;
    color: #000000;
    }
h3 {text-align: center;
    color: #000000;
    }
h4 {text-align: center;
    color: #000000;
    }
#list {
  display: inline-grid;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 1%
}

body {
  background-image: url('https://media.gq.com/photos/59270d4b7a71154410c462f3/');
      background-size: 100% 100%;
}

</style>
