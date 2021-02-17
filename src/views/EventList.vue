<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
      
      <router-link 
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</router-link
    >

    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue' // <--- Have to import it

export default {
  name: 'EventList',
  props: ['page'], // <---- receive the param as a prop, the current page
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
        watchEffect(() => { // <---- To call API again
      this.events = null // <---- Clear events on page
    EventService.getEvents(2, this.page) // <---- 2 events per page, and current page
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
    })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
