<template>
   <p>Register for the event here</p>
  <button @click="register">Register Me!</button>  <!-- run register method on button click -->
</template>
<script>
export default {
  props: ['event'], // <<-- Receives event from Layout
  methods: {
    register() {
      // If registration API call is successful
      // Push back to the event details
      this.$router.push({
        name: 'EventDetails',
        //params: { id: this.event.id } <-- we use object'id to navigate same object which router-link uses
        // But we don't need to specify the ID, it'll get populated by default
      })
    }
  }
}
</script>