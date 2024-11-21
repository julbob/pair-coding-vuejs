import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import router from '@/router';
import { useUserConnecteService } from './composables/utilisateur/userConnecteService';

const { userConnecte } = useUserConnecteService();
userConnecte.value = { username: '', password: '', token: '' };
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);

app.mount('#app');
