import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// only the home view is loaded at first. all other routes are lazy-loaded when called.
// this is done simply to cut down on network usage and speed up loading a bit on initial landing.
// but i'm not sure whether this is the right thing to do.

// NOTE: when using lazy loading feature, be sure to add the webpackChunkName directives (yes, it's not random comments)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    },
  },
  {
    path: '/speakers',
    name: 'speakers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pastevents" */ '../views/Speakers.vue'),
    meta: {
      title: "Speakers"
    },
  },

  {
    path: '/pastevents',
    name: 'pastevents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pastevents" */ '../views/PastEventsView.vue'),
    meta: {
      title: "Past Events"
    },
  },

  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: "Partners"
    },
  },

  
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: "About"
    },
  },

  // past events

  {
    path: '/pastevents/2023',
    name: 'pastevent_2023',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2023.vue'),
    meta: {
      title: "Prism Of Perception, 2023"
    },
  },
  {
    path: '/pastevents/2021',
    name: 'pastevent_2021',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2021.vue'),
    meta: {
      title: "Roar, 2021"
    },
  },
  {
    path: '/pastevents/2022',
    name: 'pastevent_2022',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2022.vue'),
    meta: {
      title: "Infinite_affinities, 2022"
    },
  },
  {
    path: '/pastevents/2023',
    name: 'pastevent_2023',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2023.vue'),
    meta: {
      title: "Prism_of_perception, 2023"
    },
  },
  {
    path: '/pastevents/2019',
    name: 'pastevent_2019',
    component: () => import(/* webpackChunkName: "pastevent_2019" */ '../views/PastEvents/PastEvent.2019.vue'),
    meta: {
      title: "Metamorphosis, 2019"
    },
  },

  {
    path: '/pastevents/2016',
    name: 'pastevent_2016',
    component: () => import(/* webpackChunkName: "pastevent_2016" */ '../views/PastEvents/PastEvent.2016.vue'),
    meta: {
      title: "Shedding Off Feathers, 2016"
    },
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import(/* webpackChunkName: "qrcode" */ '../views/Qrcode.vue'),
    meta: {
      title: "Redirect"
    },
  },
  {
    path: '/iitp-55a095e504b85523a2fd54a5e75d3bca/ticketbooking',
    name: 'ticketbooking',
    component: () => import(/* webpackChunkName: "ticketbooking" */ '../views/TicketBooking.vue'),
    meta: {
      title: "Ticket Booking"
    },
  },
  {
    path: '/comingsoon',
    name: 'comingsoon',
    component: () => import(/* webpackChunkName: "commingsoon" */ '../views/ComingSoonView.vue'),
    meta: {
      title: "Coming Soon"
    },
  },
  {
    path: '/merch',
    name: 'merch',
    component: () => import(/* webpackChunkName: "tshirtbanner" */ '../views/TshirtBanner.vue'),
    meta: {
      title: "Merchandise"
    },
  },
  // *** Error404 path. This needs to be created.
  // {
  //   path: '*',
  //   name: 'error404',
  //   component: 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
