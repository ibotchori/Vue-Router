<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
  <!-- run register method on button click -->
</template>
<script>
export default {
  props: ['event'], // <<-- Receives event from Layout
  inject: ['GStore'], // <---- Inject the Global Store, make the GStore object available inside this component
  methods: {
    register() {
      // Assuming successful API call to register them
      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title // <-- Flash message
      setTimeout(() => {
        // After 3 seconds remove flash message
        this.GStore.flashMessage = ''
      }, 3000)

      // If registration API call is successful, push back to the event details
      this.$router.push({
        name: 'EventDetails'
        //params: { id: this.event.id } <-- we use object'id to navigate same object which router-link uses
        // But we don't need to specify the ID, it'll get populated by default
      })
    }
  }
}
</script>
