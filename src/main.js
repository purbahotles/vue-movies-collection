import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia'; // Import createPinia from pinia
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// Import Quasar css
import 'quasar/dist/quasar.css';

// Import your routes
import routes from './routes.js';

// Import your root component
import App from './App.vue';

const myApp = createApp(App);

// Use Pinia as a plugin
const pinia = createPinia(); // Create a Pinia instance
myApp.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

myApp.use(router);
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
