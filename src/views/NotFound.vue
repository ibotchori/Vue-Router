<template>
  <h1>Oops!</h1>
  <!-- resource will either be page or event-->
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <!-- Link to go Home Page -->
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>

<script>
export default {
  props: {
    // Resource will be a prop that will get sent in to this component.
    resource: {
      type: String,
      required: true,
      default: 'page' // By default resource will be page
    }
  }
}
</script>