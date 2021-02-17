<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
      
      <div class="pagination">
        <router-link 
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  
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
      events: null,
      totalEvents: 0, // <--- Added this to store totalEvents
    }
  },
  created() {
        watchEffect(() => { // <---- To call API again
      this.events = null // <---- Clear events on page
    EventService.getEvents(2, this.page) // <---- 2 events per page, and current page
      .then(response => {
        this.events = response.data,
        this.totalEvents = response.headers['x-total-count']  // <--- Set totalEvents and store it
      })
      .catch(error => {
        console.log(error)
      })
    })
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      var totalPages = Math.ceil(this.totalEvents / 2) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
