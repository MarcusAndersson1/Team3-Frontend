<template>
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
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
