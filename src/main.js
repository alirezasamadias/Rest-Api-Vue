import { createApp } from 'vue';
import router from './Router';
// Css
import './Assets/Css/main.css';
// Components
import App from './App.vue';

createApp(App).use(router).mount('#app');