import { createApp } from 'vue';
import router from './Router';
// Css
import './assets/Css/Font-Icon.css';
import './assets/Css/Main.css';
// Components
import App from './App.vue';

createApp(App).use(router).mount('#app');