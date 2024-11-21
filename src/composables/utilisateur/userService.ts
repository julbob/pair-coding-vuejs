import type { User } from '@/models/User.model';
import { useUserApi } from './userApi';
import { ref } from 'vue';

const userApi = useUserApi();
const userConnecte = ref<User>({ username: '', password: '' });
export function useUserService() {
  return {
    async authenticate(user: User) {
      userConnecte.value.token = await userApi.authenticate(user);
      userConnecte.value.username = user.username;
      userConnecte.value.password = user.password;
    },
    //userConnecte,
  };
}
