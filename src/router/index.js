import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '@/views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    // Parse & Set Current page from Router
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id', // <----- children are inheriting this path
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
      }
    ]
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
    // Redirect path /about to /about-us
    alias: '/about' // <-- its makes same content in two places and Google might penalaize (CEO)
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
