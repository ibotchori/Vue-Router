<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <!-- URL= /event/2 -->
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <!-- URL= /event/2/register -->
      <router-link :to="{ name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
      |
      <!-- URL= /event/2/edit  -->
      <router-link :to="{ name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
    <p>Register for event here</p>
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
      })
  }
}
</script>
