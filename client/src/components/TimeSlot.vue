<template>
  <b-list-group-item tabindex="0">
    <p>{{ slot.dateTime }}</p>
    <b-button variant="success" v-if="slot.isAvailable" v-on:click="$emit('book-time', slot._id, slot)">BOOK</b-button><b-button variant="success" v-if="slot.isAvaliable" v-on:click="$emit('book-time', slot._id, slot)">BOOK</b-button>
    <b-button variant="secondary" v-if="!slot.isAvailable" disabled >TIME UNAVAILABLE</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'slot-item',
  props: ['slot'],
  methods: {
  }
}
</script>
