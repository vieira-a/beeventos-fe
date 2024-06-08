import { create } from 'zustand';

import { LoginService } from '../services/login.service';
import useSessionStore from './session.store';

interface LoginState {
  email: string;
  password: string;
  loginRole: string;
  errorMessage: string;
  setLoginRole: (loginRole: string) => void;
  login: (email: string, password: string, loginRole: string) => void;
  logout: () => void;
}

const useLoginStore = create<LoginState>((set) => ({
  email: '',
  password: '',
  loginRole: '',
  errorMessage: '',

  setLoginRole: async (selectedRole: string) => {
    set((state) => ({ ...state, loginRole: selectedRole }));
  },

  login: async (email, password, loginRole) => {
    const loginService = new LoginService();
    set({ email, password, loginRole });

    const data = await loginService.userLogin(email, password, loginRole);

    if (data?.access_token) {
      useSessionStore.getState().setAccessToken(data?.access_token);

      set({ errorMessage: '' });
    } else {
      set({ errorMessage: data.message });
      throw new Error(data.message);
    }

    const userProfile = await loginService.readUserProfile(data.access_token);

    if (userProfile) {
      useSessionStore.getState().setUserRole(userProfile.role);
      useSessionStore.getState().setUserId(userProfile.id);
    }
  },

  logout: () => {
    useSessionStore.getState().clearAccessToken();
  },
}));

export default useLoginStore;
