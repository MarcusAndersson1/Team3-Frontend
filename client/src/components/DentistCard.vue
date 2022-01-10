<template>
<div>
  <b-card
    :title="clinic.clinic.name"
    img-src="https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg"
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
