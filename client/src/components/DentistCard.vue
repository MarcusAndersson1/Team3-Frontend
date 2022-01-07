<template>
<div>
  <b-card
    title="Dentist"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Opening hours:
      Monday-Friday 09:00-17:00
      Saturday      09:00-16:00
      Sunday        Closed
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
      window.location = '/#/dentistpage'
    }
  }
})

</script>
