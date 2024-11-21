import axiosInstance from '@/config/AxiosConfig';
import { ApiUrlConnection } from '@/constants/ApiUrl';
import type { User } from '@/models/User.model';

export function useUserApi() {
  return {
    async authenticate(user: User): Promise<string> {
      const res = await axiosInstance.post<string>(`${ApiUrlConnection}`, {
        grant_type: 'password',
        username: user.username,
        password: user.password,
      });
      return res.data;
    },
  };
}
