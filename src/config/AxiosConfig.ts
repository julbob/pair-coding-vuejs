import { useUserService } from '@/composables/utilisateur/userService';
import axios, { type InternalAxiosRequestConfig } from 'axios';

const { userConnecte } = useUserService();
const axiosInstance = axios.create({});

/*axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] = `Bearer ${userConnecte.value.token}`;
  return config;
});*/

export default axiosInstance;
