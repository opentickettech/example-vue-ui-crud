import './assets/main.css'

import {createApp, reactive} from 'vue'
import App from './App.vue'
import router from './router'
import "@openticket/vue-ui/style.css";
import { createOpenTicketUI } from '@openticket/vue-ui';
import { Localization } from '@openticket/lib-localization';

const app = createApp(App)

// Setup localization
const localization = reactive(new Localization());
await localization.init({
  // Optional lib-localization config
});

// Create the Vue-UI plugin
const openTicketUI = createOpenTicketUI({
  localization,   // This is a required property
  // Other vue-ui config properties, see the docs below
});

// Register the plugin on the app
app.use(openTicketUI);

app.use(router)

app.mount('#app')
