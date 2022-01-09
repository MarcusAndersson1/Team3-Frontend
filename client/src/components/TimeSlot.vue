<template>
  <b-list-group-item tabindex="0" @focus="handleFocus(slot._id)">
    <p>{{ slot.dateTime }}</p>
    <b-button variant="success" v-on:click="$emit('book-slot', slot._id)">BOOK</b-button>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'slot-item',
  props: ['slot'],
  methods: {
    handleFocus(_id) {
      this.$emit('expand-slot', _id)
      console.log(this.clinics)
    },
    handleFocusOut() {
      // do something here
    }
  }
}
</script>
