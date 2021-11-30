<template>
  <b-list-group-item tabindex="0" @focus="handleFocus(slot._id)">
    <p>{{ slot.dentist }} borra {{ slot.address }} {{ slot.time }}</p>
    <b-button variant="danger" v-on:click="$emit('book-slot', slot._id)"
      >BOKA</b-button
    >
  </b-list-group-item>
</template>

<script>
export default {
  name: 'slot-item',
  props: ['slot'],
  methods: {
    handleFocus(_id) {
      this.$emit('expand-slot', _id)
    },
    handleFocusOut() {
      // do something here
    }
  }
}
</script>
