import type { User } from '@/model/User.model';
import { useUserApi } from './userApi';

const userApi = useUserApi();
export function useUserService() {
  return {
    async authenticate(user: User): Promise<User> {
      user.token = await userApi.authenticate(user);
      return user;
    },
  };
}
