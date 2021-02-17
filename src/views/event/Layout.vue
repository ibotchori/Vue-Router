<!-- Contains the navigation for each event page
& the API call for fetching the event -->

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <!-- URL= /event/2 -->
      <!-- when the router-link is rendered in the template 
      (if it’s not sent in) it will look at the URL parameters,
      and if :id exists in the current route, it will use the 
      :id in all of the link URLs.  -->
      <router-link :to="{ name: 'EventDetails'}"
        >Details</router-link
      >
      |
      <!-- URL= /event/2/register -->
      <router-link :to="{ name: 'EventRegister'}"
        >Register</router-link
      >
      |
      <!-- URL= /event/2/edit  -->
      <router-link :to="{ name: 'EventEdit'}"
        >Edit</router-link
      >
    </div>
    <!-- Displays children components: Details/Register/Edit -->
    <router-view :event="event" /> <!-- Updates from event object -->
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'], // <-- id prop
  data() {
    return {
      event: null // <--event object which update temlpate
    }
  },
  created() {
    EventService.getEvent(this.id) // <--- Use id prop to get information from API
      .then(response => {
        this.event = response.data // <-- Event data which stored to event object
      })
      .catch(error => {
        console.log(error)
        // Load this component, if the API request when fetching an event returns an error
        this.$router.push({ 
            name: '404Resource', 
            params: { resource: 'event' } })
      })
  }
}
</script>
