import { create } from 'zustand';

import { AuthService } from '../services/auth.service';
import { SessionStore } from '../types/session.types';

const useSessionStore = create<SessionStore>((set) => ({
  access_token: localStorage.getItem('access_token') || '',
  isLogged: !!localStorage.getItem('access_token'),
  userRole: '',
  userId: '',

  setAccessToken: (token) => {
    localStorage.setItem('access_token', token);
    set((state) => ({ ...state, access_token: token, isLogged: true }));
  },

  setUserRole: (role: string) => {
    set((state) => ({ ...state, userRole: role }));
  },

  setUserId: (userId: string) => {
    set((state) => ({ ...state, userId: userId }));
  },

  setUserProfile: async () => {
    const authService = new AuthService();
    const token = localStorage.getItem('access_token');
    if (token) {
      const userProfile = await authService.readUserProfile(token);
      set((state) => ({ ...state, userRole: userProfile.role }));
      set((state) => ({ ...state, userId: userProfile.id }));
    }
  },

  clearAccessToken: () => {
    localStorage.removeItem('access_token');
    set((state) => ({
      ...state,
      access_token: '',
      isLogged: false,
      userRole: '',
    }));
  },
}));

export default useSessionStore;
