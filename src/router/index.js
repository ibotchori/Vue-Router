import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '@/views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    // Parse & Set Current page from Router
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/events/:id', // <----- children are inheriting this path // make plural 'events'
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [  // <----- children are inheriting the path /event/:id from the parent route
      {
        path: '', // <-----  takes path from parent
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register', // <-----  takes root path from parent
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit', // <-----  takes root path from parent
        name: 'EventEdit',
        component: EventEdit
      },
      
    ]
  },
    {
    // This is taking whatever comes after the matching word /event/ and placing it after /events/.
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  
  {
    path: '/about',
    name: 'About',
    component: About
    // Redirect path /about to /about-us
    // alias: '/about' // <-- its makes same content in two places and Google might penalaize (CEO)
  },
  //   { // Redirect path /about to /about-us
  //   path: '/about', 
  //   redirect: { name: "About" }
  // }  

  { /*** Error Handling Routes ***/
    // catches everything that hasn’t matched a current route our NotFound component, 
    // and when this is matched, we'll load up our NotFound component.
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource', // Path with the dynamic segment of resource.
    name: '404Resource',
    component: NotFound,
    props: true // Sending resources parameter as a prop
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
