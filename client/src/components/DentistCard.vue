<template>
<div>
  <b-card
    :title="clinic.clinic.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      <br>
      <h5>Opening hours:</h5>
      Monday:        {{clinic.clinic.openinghours.monday}}<br>
      Tuesday:       {{clinic.clinic.openinghours.tuesday}}<br>
      Wednesday:     {{clinic.clinic.openinghours.wednesday}}<br>
      Thursday:      {{clinic.clinic.openinghours.thursday}}<br>
      Friday:        {{clinic.clinic.openinghours.friday}}<br>
      Saturday & Sunday: CLOSED<br><br>
      Address:       {{clinic.clinic.address}}
    </b-card-text>

    <b-button href="#" variant="primary" v-on:click="dentist">Book a time</b-button>
  </b-card>
</div>
</template>
<script>
import TimeSlot from '../components/TimeSlot.vue'
import { Api } from '@/Api'

export default ({
  components: { TimeSlot, Api },
  name: 'dentist-card',
  props: {
    clinic: {},
    name: {
      type: String
    }
  },
  methods: {
    dentist() {
      let data = this.clinic
      this.$router.push({
        name: 'dentistpage', // use name for router push
        params: { data }
      })
    }
  }
})

</script>
