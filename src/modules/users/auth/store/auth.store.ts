import { create } from 'zustand';

import { AuthService } from '../services/auth.service';
import { AuthState } from '../types/auth.types';
import useSessionStore from './session.store';

const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  loginRole: '',
  errorMessage: '',
  isLoginDialogOpen: false,
  openLoginDialog: () => set({ isLoginDialogOpen: true }),
  closeLoginDialog: () => set({ isLoginDialogOpen: false }),

  setLoginRole: async (selectedRole: string) => {
    set((state) => ({ ...state, loginRole: selectedRole }));
  },

  login: async (email, password, loginRole) => {
    const authService = new AuthService();
    set({ email, password, loginRole });

    const data = await authService.auth(email, password, loginRole);

    if (data?.access_token) {
      useSessionStore.getState().setAccessToken(data?.access_token);

      set({ errorMessage: '' });
    } else {
      set({ errorMessage: data.message });
      throw new Error(data.message);
    }

    const userProfile = await authService.readUserProfile(data.access_token);

    if (userProfile) {
      useSessionStore.getState().setUserRole(userProfile.role);
      useSessionStore.getState().setUserId(userProfile.id);
    }
  },

  logout: () => {
    useSessionStore.getState().clearAccessToken();
  },
}));

export default useAuthStore;
